'use strict';

const Promise = require('bluebird');

const db = require('../../config/db');

module.exports = (param) => {
  const todoId = param.todoId;
  return Promise.using(db(), conn => {
    const sql = 'SELECT * FROM Pet WHERE name=?';
    return conn.queryAsync(sql, [todoId]);
  });
};
