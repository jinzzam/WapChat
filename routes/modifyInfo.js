var express = require('express');
var connection = require('../public/javascripts/dbconnection');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('modifyInfo');
});

router.post('/', function (req, res, next) {

    var updatesql = "";

    connection.query(updatesql, function (err, rows, fields) {
        if (!err)
            console.log('The solution is ', rows);
        else
            console.log('Error while performing Query.', err);

    });
    connection.end();
    res.redirect("/");
})

module.exports = router;
