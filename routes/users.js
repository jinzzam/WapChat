var express = require('express');
var router = express.Router();

<<<<<<< HEAD
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('users');
});

router.post('/', function (req, res) {
    res.render('users');
})
=======
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

>>>>>>> c81feeb4752d5c04348abe34cba296427c02b75d
module.exports = router;
