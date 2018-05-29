var express = require('express');
var connection = require('../public/javascripts/dbconnection');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {//가입페이지 이동
    res.render('modifyInfo', {title: 'Modify User Information'})
});

router.post('/', function (req, res, next) {

});
module.exports = router;
