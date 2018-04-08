'use strict';

const Promise = require('bluebird');
// console.log('remove')
const db = require('../../config/db');

module.exports = (param) => {
  const username = param.username;

  return Promise.using(db(), conn => {
    const sql = 'SELECT password FROM User WHERE username=?';
    // console.log(conn.queryAsync(sql, [todoId]));
    return conn.queryAsync(sql, [username]);
  });
};