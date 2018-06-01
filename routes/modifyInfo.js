var express = require('express');
var connection = require('../public/javascripts/dbconnection');
var router = express.Router();

/* GET home page. */

router.get('/', function (req, res, next) {
    if (req.session.user_id != undefined) {
        res.render('modifyInfo',{title: 'Modify User Information'})
        res.render('conference',{user_pw:req.session.user_pw});
        res.render('conference',{verify_pw:req.session.verify_pw});
        res.render('conference',{user_nickname:req.session.user_nickname});
        res.render('conference',{user_name:req.session.user_name});
        res.render('conference',{user_phonenumber:req.session.user_phonenumber});
        res.render('conference',{user_birthday:req.session.user_birthday});
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
        var updatenumber ="update user set values(number=?) where id=?";
        var updateid="update user set values(id=?) where id=?";
        var updatepw="update user set values(password=?) where id=?";
        var updatebirthday="update user set values(birthday=?) where id=?";
        var updatenickname="update user set values(nickname=?) where id=?";
        connection.query(updatename, function (err, rows, fields) {
            if (!err)
                console.log('The solution is ', rows);
            else
                console.log('Error while performing Query.', err);

        });
        connection.query(updatenumber, function (err, rows, fields) {
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
        connection.query(updatenickname, function (err, rows, fields) {
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
