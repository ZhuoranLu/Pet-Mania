'use strict';

const Promise = require('bluebird');

const db = require('../../config/db');

module.exports = (param) => {
  const title = param.title;

  return Promise.using(db(), conn => {
    const sql = `insert into todo (title) values(?)`;
    return conn.queryAsync(sql, [title]);
  });
};