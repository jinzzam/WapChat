var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123',
    port: '3306',
    database: 'mydb'
});
connection.connect();

module.exports = connection;