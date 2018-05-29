var express = require('express');
var connection = require('../public/javascripts/dbconnection');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    if (req.session.user_id != undefined) {
        res.render('chat',{user_id:req.session.user_id});
    } else {
        res.redirect('/login');
    }
});

router.post('/', function (req, res) {
    res.render('chat');
})
module.exports = router;
