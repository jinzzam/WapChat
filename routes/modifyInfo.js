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
    var updateidsql = 'select password from user where id=? and pw=?';
    var updatepwsql = 'select id from user where id=? and pw=?';
    var updatepwsql = 'select password from user where id=? and pw=?';



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

    if(selectpwsql==)


    //connection.end();
});
module.exports = router;
