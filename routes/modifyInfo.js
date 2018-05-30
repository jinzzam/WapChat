var express = require('express');
var connection = require('../public/javascripts/dbconnection');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {//가입페이지 이동
    res.render('modifyInfo', {title: 'Modify User Information'})
});

router.post('/', function (req, res, next) {
<<<<<<< HEAD
=======


>>>>>>> 761eb0481e61ef503a987a03e80af3c52a740d3e
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

    //connection.end();
});
module.exports = router;
