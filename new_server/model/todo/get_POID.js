'use strict';

const Promise = require('bluebird');

const db = require('../../config/db');

module.exports = (param) => {
  return Promise.using(db(), conn => {
    const sql = "SELECT MAX(POID) AS max_poid FROM Post";
    console.log(sql);
    return conn.queryAsync(sql, []);
  });
};
