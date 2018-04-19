'use strict';

const Promise = require('bluebird');

const db = require('../../config/db');

module.exports = (param) => {
	const postBy = param.postBy;
  return Promise.using(db(), conn => {
    const sql = "SELECT COUNT(POID) FROM Post WHERE postBy = ?";
    console.log(sql);
    return conn.queryAsync(sql, [postBy]);
  });
};
