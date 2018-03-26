'use strict';

const Promise = require('bluebird');

const db = require('../../config/db');

module.exports = (param) => {
  const todoId = param.todoId;
  const done = param.done;

  return Promise.using(db(), conn => {
    const sql = `update todo set done=? where id=?`;
    return conn.queryAsync(sql, [done, todoId]);
  });
};