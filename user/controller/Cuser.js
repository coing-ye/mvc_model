//컨트롤러
const User = require('../model/User');

exports.user = (req,res) => {
    res.render('usermain');
};

exports.getsignin = (req,res) =>{
    res.render('signin');
};

exports.insertuser = (req,res)=>{

    User.VerifyId(req.body, (result)=>{
        console.log(result);
        if(result == 0){
            User.Insertuser(req.body,(result)=>{
                res.send(result);
            });
        }
        else if(result >0){
            res.send(false);
        }
    })
    // User.Insertuser(req.body,(result)=>{
    //     res.send({data: result});
    // });
};

exports.getsignup = (req,res) =>{
    res.render('signup');
};

exports.login = (req,res) =>{
    User.VerifyId(req.body, (result)=>{
        if(result == 0){
            res.send(false);
        }
        else if(result == 1){
            User.LoginCheck(req.body,(result)=>{
                //result는 비밀번호 같을 시에 Success를, 다를 시엔 Fail을 반환하도록 설정
                res.send(result);
            })
        }
    })
};

exports.profile = (req,res)=>{
    res.render('profile',{data:req.body});
}