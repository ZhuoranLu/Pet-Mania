'use strict';

const mysql = require('mysql');
const Promise = require('bluebird');

Promise.promisifyAll(mysql);
Promise.promisifyAll(require('mysql/lib/Connection').prototype);
Promise.promisifyAll(require('mysql/lib/Pool').prototype);

const local = {
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'todolist',
  port: 3306,
  charset: 'utf8mb4'
};

const pool = mysql.createPool(local);

module.exports = () => {
  return pool.getConnectionAsync().disposer(function(connection) {
    connection.release();
  });
};
