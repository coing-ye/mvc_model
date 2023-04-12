const express = require('express');
const controller = require('../controller/Ccookie');
const router = express.Router();


router.get('/',controller.sessionindex);
router.get('/session/name',controller.sessionname);
router.get('/session/destroy',controller.sessiondestroy);

app.get('/', (req, res) => {
    res.render('sessionindex');
});
  
  app.get('/session/set', (req, res) => {
    // 세션 설정
    req.session.name = '홍길동';
    // 응답
    res.send('세션 설정 완료!');
  });
  
  app.get('/session/name', (req, res) => {
    // 세션 읽기(사용)
    // req.session.키
    // req.sessionID: 현재 세션의 ID (서버가 클라이언트를 구별하기 위해 부여하는 고유 값)
    // -> 브라우저 단위
  
    res.send({
      id: req.sessionID,
      name: req.session.name,
    });
  });
  
  app.get('/session/destroy', (req, res) => {
    // req.session.destroy(세션 삭제시 호출할 콜백함수)
    // -> 세션 완전히 삭제하고, 웹 사이트 접속할 때마다 새로운 sessionID 할당
    req.session.destroy((err) => {
      if (err) {
        throw err;
      }
  
      res.send('세션 삭제 완료!');
    });
  });

  module.exports = router;