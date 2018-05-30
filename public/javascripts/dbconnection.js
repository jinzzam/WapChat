
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
<<<<<<< HEAD
    password: '',
=======
<<<<<<< HEAD
    password: '1234',
    //password: '0000',
    password: '1234',
=======
    password: '0000',
>>>>>>> 761eb0481e61ef503a987a03e80af3c52a740d3e
>>>>>>> 5dbd2bcd0bbd17437db5b6eb3206a5f57bcaef23
    port: '3306',
    database: 'mydb'
});
connection.connect();

module.exports = connection;


// var mysql = require('mysql');
// var connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '123', /*서윤영 비밀번호:null, 박유진 비밀번호:123, 김예영, 김영현 비밀번호:1234*/
//     port: '3306',
//     database: 'mydb'
// });
// connection.connect();
//
// module.exports = connection;

