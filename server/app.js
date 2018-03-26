'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.all('*', require('./middleware/route-test'), require('./middleware/session-test'));

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', require('./route/index'));
app.use('/user', require('./route/user'));
app.use('/mission', require('./route/mission'));
app.use('/secret', require('./route/secret'));
app.use('/todo', require('./route/todo'));
app.use('/todos', require('./route/todos'));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});