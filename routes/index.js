var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
<<<<<<< HEAD
    res.render('index');
});

router.post('/', function (req, res) {
    res.render('index');
})
=======
    res.render('index', { title: 'Express' });
});


>>>>>>> c81feeb4752d5c04348abe34cba296427c02b75d
module.exports = router;
