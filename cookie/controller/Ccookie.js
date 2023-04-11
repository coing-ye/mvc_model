const User = require('../model/Cookie');


const cookieConfing = {
  httpOnly: true, // 웹 서버를 통해서만 쿠키 접근 가능
  maxAge: 60 * 1000, // 쿠키 수명 (ms 단위)
  // expires: 만료 날짜 설정
  // secure: https 에서만 쿠키 접근
  // signed: 쿠키 암호화
};

exports.cookieindex = (req,res) =>{
    res.render('cookie');
};

exports.setcookie = (req,res) =>{
    // res.cookie(key, value, options)
    // : 쿠키 "설정"
    res.cookie('my first cookie', 'cookie value test', cookieConfing);
    // 클라이언트 응답 보냄
    res.send('쿠키 설정 완료!!');
};

exports.getcookie = (req,res)=>{
    res.send(req.cookies);
};

exports.clearcookie = (req,res) =>{
    // 쿠키 삭제
    // clearCookie 할 때, res.cookie() 설정했던 key & value & option 일치해야 함
    // (단, option에서 expires, maxAge 옵션은 일치하지 않아도 괜찮!)
    // res.clearCookie(key, value, options)
    // : 쿠키 "삭제"
    if(Object.keys(req.cookies).length === 0){
        res.send("쿠키가 없습니다!!");
    }
    else{
        res.clearCookie('my first cookie', 'cookie value test', cookieConfing);
  
    // 클라이언트 응답
    res.send('쿠키 삭제 완료!!');
    }
    
};