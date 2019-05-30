const express = require('express');
const router = express.Router();
const { catchErrors } = require('../handlers/errorHandlers');
const premiumController = require('../controllers/premiumController');
const authController = require('../controllers/authController');

// Do work here
router.get('/', catchErrors(premiumController.getIndex));

router.get('/register', authController.getRegister);
router.post('/register',
  authController.validateRegister,
  catchErrors(authController.postRegister),
  authController.login
);

router.get('/account', authController.isLoggedIn, authController.getAccount);

router.get('/login', authController.getLogin);
router.post('/login',
  authController.validateLogin,
  // catchErrors(authController.postLogin),
  authController.login
);

router.get('/logout', authController.getLogout);

module.exports = router;
