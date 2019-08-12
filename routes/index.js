const express = require('express');
const router = express.Router();
const { catchErrors } = require('../handlers/errorHandlers');
const premiumController = require('../controllers/premiumController');
const authController = require('../controllers/authController');
const studentController = require('../controllers/studentController');

// Do work here
router.get('/', catchErrors(premiumController.getIndex));
router.get('/prices', catchErrors(premiumController.getPricing));
router.post('/prices', premiumController.postPricing);

router.get('/useful-links', premiumController.getLinks);
router.get('/terms', premiumController.getTerms);
router.get('/contact', premiumController.getContact);

// router.get('/register', authController.getRegister);
// router.post(
//   '/register',
//   authController.validateRegister,
//   catchErrors(authController.postRegister),
//   authController.login
// );

// router.get('/account', authController.isLoggedIn, authController.getAccount);

// router.get('/login', authController.getLogin);
// router.post(
//   '/login',
//   authController.validateLogin,
//   // catchErrors(authController.postLogin),
//   authController.login
// );

// router.get('/logout', authController.getLogout);

// router.post('/add-student', catchErrors(studentController.postNewStudent));

module.exports = router;
