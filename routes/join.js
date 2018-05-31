var express = require('express');
var connection = require('../public/javascripts/dbconnection');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {//가입페이지 이동
    if(req.session.user_id==undefined)
    res.render('join', {title: 'Join'});
    else
        res.redirect('/');
});

router.post('/', function (req, res, next) {
    var name = req.body.name;
    var birthday = req.body.birthday;
    var number = req.body.number;
    var id = req.body.user_id;
    var password = req.body.user_pw;
    var verifypw = req.body.verify_pw;
    var nickname=req.body.user_nickname;

    if (password == verifypw) {
        //회원가입 성공
        var insertsql = 'insert into user (name,birthday,number,id,password,nickname) values ("' + name + '","' + birthday + '","' + number + '","' + id + '","' + password + '","' + nickname + '")';
        connection.query(insertsql, function (err, rows, fields) {
            if (!err)
                console.log('The solution is ', rows);
            else
                console.log('Error while performing Query.', err);
        });
        connection.end();
        res.redirect('/');
    } else {
        res.redirect('/join-fail');
    }

    console.log(req.body);
});

module.exports = router;