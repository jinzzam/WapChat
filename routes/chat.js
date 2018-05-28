var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('chat');
});

router.post('/', function (req, res) {
    res.render('chat');
})
module.exports = router;
