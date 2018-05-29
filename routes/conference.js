var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('conference');
});

router.post('/', function (req, res) {
    var usenamesql = 'select name from user where id=?';
    var usenicksql = 'select nickname from user where id=?';
    res.render('conference');
})
module.exports = router;
