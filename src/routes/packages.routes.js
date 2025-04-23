const express = require('express');
const { createPackages, getAllPackages, getSinglePackage, updatePackage, deletePackage } = require('../controllers/packages.controller');
const authGuard = require('../middleware/auth');
const router = express.Router();

router.post('/', createPackages);
router.get('/', authGuard, getAllPackages);
router.get('/:id', getSinglePackage);
router.put('/:id', updatePackage);
router.delete('/:id', deletePackage)

module.exports = router;
