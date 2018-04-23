'use strict';

const Promise = require('bluebird');

const db = require('../../config/db');

module.exports = (param) => {
	const username = param.username;
  return Promise.using(db(), conn => {
    // console.log("wocaonima");
 //    SELECT column_name(s)
	// FROM table1
	// INNER JOIN table2 ON table1.column_name = table2.column_name;

    const sql = "SELECT Post.image "
    			+ " FROM Post"
    			+ " INNER JOIN likedPOID ON likedPOID.likedPOID = Post.POID";
    console.log(sql);
    return conn.queryAsync(sql, [username]);
  });
};
