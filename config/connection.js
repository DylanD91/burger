// Dependencies
const mysql = require("mysql");
require("dotenv").config();

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
// Connection to DB
    var connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "Nelsoniscool2!",
        database: "burger_db"
    });
}

// If error connecting
connection.connect(function (err) {
    if (err) {
        console.error("error coneccting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId)
});
// Exports connection for other files to use
module.exports = connection;