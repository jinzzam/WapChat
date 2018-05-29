
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
<<<<<<< HEAD
    password: '1234',
=======
    password: '0000',
>>>>>>> 9365d03e56e66dbb9e83836793f6485048f1e9e7
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

