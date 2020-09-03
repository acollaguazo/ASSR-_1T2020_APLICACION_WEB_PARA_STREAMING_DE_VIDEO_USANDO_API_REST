const mysql = require('mysql');
module.exports = () => {
    return mysql.createConnection({
        host: "localhost",
        user:'root',
        password: 'root123',
        database:'proyecto',
        insecureAuth : true
    });
    }