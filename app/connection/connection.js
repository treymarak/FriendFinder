var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL) {

    connection = mysql.createConnection(process.env.JAWSDB_URL);

} else {
    connection = mysql.createConnection({
        host: "localhost",
        user: "wwayfoy7ysbpv8ld",
        password: "g1e0s34njvhcobzk",
        database: "a19um0wzyd5lx8k4"
    });
};


connection.connect();
module.exports = connection;