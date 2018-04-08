'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.all('*', require('./middleware/route-test'), require('./middleware/session-test'));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', require('./route/index'));
app.use('/user', require('./route/user'));
app.use('/mission', require('./route/mission'));
app.use('/secret', require('./route/secret'));
// app.use('/todo', require('./route/todo'));
app.use('/todos', require('./route/todos'));


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
