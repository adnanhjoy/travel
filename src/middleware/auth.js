const jwt = require('jsonwebtoken');

const authGuard = (allowedRoles = []) => {
  return (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({ message: 'Unauthorized: No token provided' });
    }

    try {
      const token = authHeader.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;

      if (allowedRoles.length === 0) {
        return next();
      }

      if (req.user.role === 'admin') {
        return next();
      }

      if (!allowedRoles.includes(req.user.role)) {
        return res.status(403).json({ message: 'Access Denied: Role not allowed' });
      }

      const requestedUserId = req.params.email;

      if (requestedUserId && requestedUserId !== req.user.email) {
        return res.status(403).json({ message: 'Access Denied: Token does not match your identity' });
      }

      next();
    } catch (error) {
      console.error('JWT error:', error.message);
      return res.status(401).json({ message: 'Unauthorized: Invalid or expired token' });
    }
  };
};

module.exports = authGuard;
