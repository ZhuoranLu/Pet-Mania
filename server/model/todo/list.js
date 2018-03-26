'use strict';

const Promise = require('bluebird');

const db = require('../../config/db');

module.exports = () => {
  return Promise.using(db(), conn => {
    const sql = `select * from todo`;
    return conn.queryAsync(sql, []);
  });
};