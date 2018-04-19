
'use strict';

const Promise = require('bluebird');

const db = require('../../config/db');

module.exports = (param) => {
	const username = param.username;
  return Promise.using(db(), conn => {
    // console.log("wocaonima");
    const sql = "SELECT POID FROM Post WHERE postBy = ?";
    return conn.queryAsync(sql, [username]);
  });
};