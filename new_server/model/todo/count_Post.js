'use strict';

const Promise = require('bluebird');

const db = require('../../config/db');

module.exports = (param) => {
	const postBy = param.postBy;
  return Promise.using(db(), conn => {
    const sql = "SELECT postBy FROM Post WHERE POID = " + postBy;
    console.log(sql);
    return conn.queryAsync(sql, [postBy]);
  });
};
