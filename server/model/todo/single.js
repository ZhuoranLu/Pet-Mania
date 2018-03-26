'use strict';

const Promise = require('bluebird');

const db = require('../../config/db');

module.exports = (param) => {
  const todoId = param.todoId;
  return Promise.using(db(), conn => {
    const sql = `select * from todo where id=?`;
    return conn.queryAsync(sql, [todoId]);
  });
};