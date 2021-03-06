const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');

const UserController = require('../controllers/UserController');
const AuthController = require('../controllers/AuthController');
const ProfileController = require('../controllers/ProfileController');
const SelectController = require('../controllers/SelectController');

router.get('/', auth, UserController.indexUser);
router.get('/data', SelectController.getSelectInfo);
router.get('/profile', ProfileController.createHardware);
router.post('/create', UserController.createUser);
router.post('/auth', AuthController.authUser);

router.post('/profile/create', SelectController.createHardware);
router.post('/info', SelectController.getHardwareInfo);

module.exports = router;

