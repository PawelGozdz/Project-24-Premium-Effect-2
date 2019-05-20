const express = require('express');
const router = express.Router();
const { catchErrors } = require('../handlers/errorHandlers');
const premiumController = require('../controllers/premiumController');

// Do work here
router.get('/', catchErrors(premiumController.getIndex));

module.exports = router;
