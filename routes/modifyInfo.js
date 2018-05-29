var express = require('express');
var connection = require('../public/javascripts/dbconnection');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('modifyInfo');
});

router.post('/', function (req, res, next) {
    var selectpwsql = 'select password from user where id=?';

    var updatenamesql = 'select name from user where id=? and pw=?';
    var updatebirthdaysql = 'select birthday date from user where id=? and pw=?';
    var updatephonenumbsql = 'select  phonenumber from user where id=? and pw=?';
    var updateidsql = 'select id from user where id=? and pw=?';
    var updatepwsql = 'select password from user where id=? and pw=?';
<<<<<<< HEAD
    var updatenicksql = 'select nickname from user where id=? and pw=?';
        /* db 정보갱신 코드_변경 예정
    connection.query("UPDATE user SET name=?, birthday date=?, phonenumber=?,id=?,password=?,nickname=? where name=?, birthday date=?, phonenumber=?,id=?,password=?,nickname=?"
        function (error, result, fields){
                if(error){
                res.send('err : '+error)
                }
                else {
                console.log(name+','+birthday date+','+phonenumber+','+id+','+password+','+nickname)
                res.send('success update user information: '+name+birthday date+phonenumber+id+password+nickname)
                }
        })
    connection.end();
    */
=======



    /*
    var user_id = req.body.user_id;
    var user_pw = req.body.user_pw;

    var selectpwsql = 'select password from user where id=?';

    connection.query(selectpwsql, user_id, function (err, rows, fields) {
        console.log('rows[0] : ', rows);
        if (err) throw err;
        if (rows[0] == null) {
            res.redirect('/no-id');
        } else {
            if (rows[0].password == user_pw) {
                //로그인 성공
                res.render('index', {title: 'Login success!'});
            } else {
                //비밀번호 불일치
                res.redirect('/unmatched-pw');
            }
        }
        */

    //if(selectpwsql==)


    //connection.end();
>>>>>>> 9365d03e56e66dbb9e83836793f6485048f1e9e7
});
module.exports = router;
