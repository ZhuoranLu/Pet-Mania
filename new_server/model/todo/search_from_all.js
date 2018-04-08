'use strict';

const Promise = require('bluebird');

const db = require('../../config/db');

module.exports = (param) => {
	const param1_from = param.from;
	const param2_where = param.where;
	const param3_like = param.like;
  return Promise.using(db(), conn => {
    // console.log("wocaonima");
    const sql = "SELECT * FROM " +param1_from+ " WHERE " + param2_where + " LIKE '%"+param3_like+"%' ";
    // const sql = "SELECT * FROM Pet WHERE name LIKE '%?%'";
    return conn.queryAsync(sql, [param1_from]);
  });
};
