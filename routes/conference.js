var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    if (req.session.user_id == undefined) {
        res.render('login', {title: 'title'});
    } else {
        res.redirect('/');
    }
});

router.post('/', function (req, res) {
    res.render('conference');
})
module.exports = router;
