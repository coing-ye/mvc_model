const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use('/static', express.static(__dirname + '/static'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 기본 주소: localhost:PORT/user
const userRouter = require('./routes/user');
app.use('/user',userRouter);


app.get('*',(req,res)=>{
  res.render('404');
});

// TODO: 404 에러 처리
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}/user`);
});
