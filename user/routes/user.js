const express = require('express');
const controller = require('../controller/Cuser');
const router = express.Router();


router.get('/',controller.user);
router.get('/signin',controller.getsignin);
router.post('/signin/login',controller.login);

router.get('/signup',controller.getsignup);
router.post('/signup/write',controller.insertuser);

router.post('/profile',controller.profile);

module.exports = router;
