
const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: '1234',
    database: 'codingon',
});

exports.VerifyId = (insertdata,callback) => {
    //Node JS의 escape 함수를 사용하여 sql injection 방지
    const searchsql = "Select count(userid) from pracuser where userid = "+conn.escape(insertdata.userid)+";";
    conn.query(searchsql,(err,rows) =>{
        if (err){
            throw err;
        }
        callback(rows[0]['count(userid)']);
    })
};

exports.Insertuser = (insertdata,callback)=>{
    //SQL injection 방지
    const insertsql = "INSERT INTO pracuser (userid,pwd,name) values (?,?,?)";
    const params = [insertdata.userid,insertdata.pwd,insertdata.name];
    conn.query(insertsql,params,(err,rows)=>{
        if(err){
            throw err;
        }
        callback(insertdata.name);
    })
};


exports.LoginCheck = (checkdata,callback)=>{
    const loginchecksql = "select pwd from pracuser where userid = "+conn.escape(checkdata.userid)+";";
    conn.query(loginchecksql, (err,rows)=>{
        if(err){
            throw err;
        }
        if(checkdata.pwd === rows[0]['pwd']){
            callback("Success");
        }
        else if(checkdata.pwd !== rows[0]['pwd']){
            callback("Fail");
        }
    })

}