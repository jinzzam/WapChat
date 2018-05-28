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


    //connection.end();
});
module.exports = router;
