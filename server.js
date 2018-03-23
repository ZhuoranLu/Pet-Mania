// Module dependencies

var express    = require('express'),
    mysql      = require('mysql');

// Application initialization

var connection = mysql.createConnection({
    host: "192.17.90.133",
    user: "servernotfound_u",
    password: "laozhuquanxidi1"
});

var app = module.exports = express.createServer();

// Database setup

// connection.query('CREATE DATABASE IF NOT EXISTS test', function (err) {
//     if (err) throw err;
//     connection.query('USE test', function (err) {
//         if (err) throw err;
//         connection.query('CREATE TABLE IF NOT EXISTS users('
//             + 'id INT NOT NULL AUTO_INCREMENT,'
//             + 'PRIMARY KEY(id),'
//             + 'name VARCHAR(30)'
//             +  ')', function (err) {
//                 if (err) throw err;
//             });
//     });
// });

// Configuration

app.use(express.bodyParser());

// Main route sends our HTML file

app.get('/', function(req, res) {
    res.sendfile(__dirname + '/index.html');
});

// Update MySQL database

app.post('/users', function (req, res) {
    connection.query('INSERT INTO users SET ?', req.body,
        function (err, result) {
            if (err) throw err;
            res.send('User added to database with ID: ' + result.insertId);
        }
    );
});

// Begin listening

app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
