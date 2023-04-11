const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use('/static', express.static(__dirname + '/static'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// cookie-parser 모듈 불러오기
// : 요청의 쿠키를 해석해서 req.cookies 객체로 만듦
// ex. name=hello 라는 쿠키를 보내면, req.cookies => { name: 'hello' }
const cookieParser = require('cookie-parser');

// cookieParser(secretKey, optionObj);
// - secretKey: 비밀키
// - optionObj: 쿠키에서 사용할 옵션 값
app.use(cookieParser()); // req.cookies 가능 해짐


const cookieRouter = require('./routes/cookie');
app.use('/cookie',cookieRouter);


app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});