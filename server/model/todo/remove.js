'use strict';

const Promise = require('bluebird');
console.log('remove')
const db = require('../../config/db');

module.exports = (param) => {
  const todoId = param.todoId;

  return Promise.using(db(), conn => {
    const sql = 'DELETE FROM Pet WHERE PID=?';
    // console.log(conn.queryAsync(sql, [todoId]));
    return conn.queryAsync(sql, [todoId]);
  });
};
