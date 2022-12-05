var mysql2 = require('mysql2');
var connection = mysql2.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '1234',
    database : 'Bookstore'
});
try {
    connection.connect();
} catch(e) {
    console.log('Database Connection failed:' + e);
}
module.exports = connection;