const express = require('express');
const controller = require('../controller/Ccookie');
const router = express.Router();


router.get('/',controller.cookieindex);

// 1. 쿠키 설정
router.get('/setCookie',controller.setcookie);
// 2. 쿠키 확인
router.get('/getCookie',controller.getcookie);
// 3. 쿠키 삭제
router.get('/clearCookie',controller.clearcookie);

module.exports = router;

