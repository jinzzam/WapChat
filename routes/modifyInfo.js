var express = require('express');
var connection = require('../public/javascripts/dbconnection');
var router = express.Router();

/* GET home page. */

router.post('/', function (req, res, next) {
    var updatenamesql = 'select name from user where id=? and pw=?';
    var updatebirthdaysql = 'select birthday date from user where id=? and pw=?';
    var updatephonenumbsql = 'select  phonenumber from user where id=? and pw=?';
    var updateidsql = 'select id from user where id=? and pw=?';
    var updatepwsql = 'select password from user where id=? and pw=?';
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
});

router.get('/', function (req, res, next) {
    if (req.session.user_id != undefined) {
        res.render('modifyInfo',{title: 'Modify User Information'})
    } else {
        res.redirect('/login');
    }
});

router.post('/', function (req, res) {
    console.log(req.body);
    var user_name=req.body.user_name;
    var user_phone=req.body.number;
    var user_id = req.body.user_id;
    var user_pw = req.body.user_pw;
    var user_birthday=req.body.birthday;
    var user_nickname=req.body.user_nickname;

    if (password == verifypw) {
        //정보수정
        var updatename = "update user set values(name=?) where id=?";
        var updatenumber ="update user set values(phonenumber=?) where id=?";
        var updateid="update user set values(id=?) where id=?";
        var updatepw="update user set values(password=?) where id=?";
        var updatebirthday="update user set values(birthday=?) where id=?";
        var updatenicknaem="update user set values(nickname=?) where id=?";
        connection.query(updatename, function (err, rows, fields) {
            if (!err)
                console.log('The solution is ', rows);
            else
                console.log('Error while performing Query.', err);

        });
        connection.query(updateid, function (err, rows, fields) {
            if (!err)
                console.log('The solution is ', rows);
            else
                console.log('Error while performing Query.', err);

        });
        connection.query(updatepw, function (err, rows, fields) {
            if (!err)
                console.log('The solution is ', rows);
            else
                console.log('Error while performing Query.', err);

        });
        connection.query(updatebirthday, function (err, rows, fields) {
            if (!err)
                console.log('The solution is ', rows);
            else
                console.log('Error while performing Query.', err);

        });
        connection.query(updatenicknaem, function (err, rows, fields) {
            if (!err)
                console.log('The solution is ', rows);
            else
                console.log('Error while performing Query.', err);

        });
        connection.end();
        res.redirect('/');
    } else {
        res.redirect('/login');
    }
    res.render('modifyInfo');
});
module.exports = router;
