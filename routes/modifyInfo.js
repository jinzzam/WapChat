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
    var name = req.body.name;
    var birthday = req.body.birthday;
    var phonenumber = req.body.phonenumber;
    var id = req.body.user_id;
    var password = req.body.user_pw;
    var verifypw = req.body.verify_pw;
    var nickname=req.body.user_nickname;

   var updatesql = "update user set name=?, birthday=?, phonenumber=?, id=?, password=?,nickname=? where id=?";
    connection.query(updatesql,[name, birthday,phonenumber,id,password,nickname],function(err,rows,fields){
        if(err)
        {
            console.log(err);
            res.status(500).send('Internal Server Error');
        } else{
            res.redirect('/user/'+id+name+birthday+phonenumber+password+nickname);
        }
    res.render('modifyInfo');
});
module.exports = router;
