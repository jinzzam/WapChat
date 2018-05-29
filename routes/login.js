var express = require('express');
var connection = require('../public/javascripts/dbconnection');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    if (req.session.user_id == undefined) {
        res.render('login', {title: 'title'});
    } else {
        res.redirect('/');
    }
});

router.post('/', function (req, res, next) {
    console.log(req.body);

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
                req.session.user_id = user_id;
                res.redirect('/');
            } else {
                //비밀번호 불일치
                res.redirect('/unmatched-pw');
            }
        }
    });
    //connection.end();
});

// router.post('/',function(request,response){
//     if(request.session.key){
//         console.log('유효 세션('+request.session.key+')');
//         response.send('유효한 세션입니다.');
//     }
//     else{
//         request.session.key=request.body.id;
//         console.log('세션이 보관되었습니다'+request.session.key+')');
//         response.send('세션이 성공적으로 보관되었습니다.');
//     }
// });

module.exports = router;

