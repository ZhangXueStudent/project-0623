const mysql = require('mysql');

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: ''
});

connection.connect(function (err) {
    if (err) {
        throw err;
    }
    console.log('MySQL connected.');
});

module.exports = connection;