var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('conference');
});

router.post('/', function (req, res) {
    res.render('conference');
})
module.exports = router;
