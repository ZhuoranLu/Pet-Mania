'use strict';

const Promise = require('bluebird');

const db = require('../../config/db');

module.exports = (param) => {
	const keyword = "%" +param.keyword + "%";
	// console.log(keyword)
  return Promise.using(db(), conn => {
    // console.log("wocaonima");
    const sql = "SELECT * FROM Post WHERE (text LIKE ? OR postBy LIKE ?)";
    // const sql = "SELECT * FROM Pet WHERE name LIKE '%?%'";
    return conn.queryAsync(sql, [keyword,keyword]);
  });
};
