const prisma = require('../../prisma/client');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
    const { name, email, password, role } = req.body;

    try {
        const hashed = await bcrypt.hash(password, 10);
        const user = await prisma.user.create({
            data: { name, email, role, password: hashed },
        });

        res.status(200).json({
            success: true,
            message: "User Register successfull",
            data: user
        });
    } catch (err) {
        if (err.code === 'P2002') {
            res.status(400).json({ error: 'User with this email already exists' });
        } else {
            console.error('Registration error:', err);
        }
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return res.status(404).json({ error: 'User not found' });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(401).json({ error: 'Invalid password' });

    const token = jwt.sign(
        {
            id: user.id,
            email: user.email
        }, process.env.JWT_SECRET, {
        expiresIn: '1d',
    });
    res.json({ token });
};



const allUser = async (req, res) => {
    try {
        const user = await prisma.user.findMany({
            select: {
                id: true,
                name: true,
                email: true,
                role: true
            }
        });
        res.status(200).json({
            success: true,
            message: "User get successfull",
            data: user
        });
    } catch (error) {
        res.status(200).json({
            success: false,
            message: "User not found",
        });
    }
}



const singleUser = async (req, res) => {
    try {
        const user = await prisma.user.findUnique({
            where: {
                email: req.params.email
            },
            select: {
                id: true,
                name: true,
                email: true,
            }
        });
        res.status(200).json({
            success: true,
            message: "User get successfull",
            data: user
        });
    } catch (error) {
        res.status(200).json({
            success: false,
            message: "User not found",
        });
    }
}

module.exports = {
    register,
    login,
    allUser,
    singleUser
}