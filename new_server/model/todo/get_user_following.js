'use strict';

const Promise = require('bluebird');

const db = require('../../config/db');

module.exports = (param) => {
	const username = param.username;
  return Promise.using(db(), conn => {
    // console.log("wocaonima");
    const sql = "SELECT following FROM following WHERE username = ?";
    return conn.queryAsync(sql, [username]);
  });
};
