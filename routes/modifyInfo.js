var express = require('express');
var connection = require('../public/javascripts/dbconnection');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    if (req.session.user_id != undefined) {
        var select = 'select * from user where id=?';
        connection.query(select, req.session.user_id, function (err, rows, fields) {
            console.log(rows);
            res.render('modifyInfo', {title: 'Modify User Information', udata: rows[0], session: req.session});
        });
    } else {
        res.redirect('/login');
    }
});

router.post('/', function (req, res) {
    console.log(req.body);
    var user_name = req.body.username;
    var user_phone = req.body.number;
    var user_id = req.body.user_id;
    var user_pw = req.body.user_pw;
    var user_verify_pw = req.body.verify_pw;
    var user_birthday = req.body.birthday;
    var user_nickname = req.body.user_nickname;

    if (user_pw == user_verify_pw) {
        //정보수정
        var updatename = "update user set name=?,phonenumber=?,id=?,password=?,birthday=?,nickname=? where id=?";
        connection.query(updatename, [user_name, user_phone, user_id, user_pw, user_birthday, user_nickname, user_id], function (err, rows, fields) {
            if (!err)
                console.log('The solution is ', rows);
            else
                console.log('Error while performing Query.', err);
            res.redirect('/');
        });
    } else {
        res.redirect('/login');
    }
});
module.exports = router;
