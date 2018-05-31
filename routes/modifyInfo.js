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
        res.render('modifyInfo', {title: 'Modify User Information'})
    } else {
        res.redirect('/login');
    }
});
router.post('/', function (req, res) {
    res.render('modifyInfo');
})
module.exports = router;
