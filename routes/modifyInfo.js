var express = require('express');
var connection = require('../public/javascripts/dbconnection');

var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('modifyInfo');
});

router.post('/', function (req, res, next) {

})

module.exports = router;
