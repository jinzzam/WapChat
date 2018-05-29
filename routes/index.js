var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'WapChat', user_id: req.session.user_id});
});

module.exports = router;