// Module dependencies

var express    = require('express'),
    mysql      = require('mysql');

// Application initialization

var connection = mysql.createConnection({
    host: "192.17.90.133",
	  user: "servernotfound_test",
    password: "YauU.f_%Qr6^",
    database: "servernotfound_data",
    port: 3306
});

// connection.connect(function(err) {
//   if (err){
//     consol.log('error ??');
//     return;
//   }
//   console.log("Connected!");
// });

var app = express();

// Database setup

connection.query('SELECT * FROM Pet', function(err, results) {
  if(err){
    console.log(err);
    return;
  }
  console.log(results);
});
connection.end();
// Configuration

// app.use(express.bodyParser());
//
// // Main route sends our HTML file
//
// app.get('/', function(req, res) {
//     res.sendfile(__dirname + '/index.html');
// });
//
// // Update MySQL database
//
// app.post('/users', function (req, res) {
//     connection.query('INSERT INTO users SET ?', req.body,
//         function (err, result) {
//             if (err) throw err;
//             res.send('User added to database with ID: ' + result.insertId);
//         }
//     );
// });

// Begin listening

app.listen(7002);
// console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
