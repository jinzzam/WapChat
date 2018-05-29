var express = require('express');
var connection = require('../public/javascripts/dbconnection');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    if (req.session.user_id != undefined) {
        req.session.user_id = undefined;
    }
    res.redirect('/');
});

module.exports = router;
