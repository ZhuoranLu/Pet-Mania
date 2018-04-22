'use strict';

const Promise = require('bluebird');

const db = require('../../config/db');

module.exports = (param) => {
	const username = param.username;
  return Promise.using(db(), conn => {
    // console.log("wocaonima");

    const sql = "SELECT * FROM Post WHERE POID IN (SELECT )";
    console.log(sql);
    return conn.queryAsync(sql, [username]);
  });
};
