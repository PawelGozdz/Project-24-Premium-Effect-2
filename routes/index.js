const express = require('express');
const router = express.Router();
const premiumController = require('../controllers/premiumController');

// Do work here
router.get('/', premiumController.getIndex);

module.exports = router;
