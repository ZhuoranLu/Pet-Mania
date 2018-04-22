'use strict';

const Promise = require('bluebird');

const db = require('../../config/db');

module.exports = (param) => {

// SELECT keyword, count( * ) AS count
// FROM article_keyword
// GROUP BY keyword
// ORDER BY count DESC
// LIMIT 20

  return Promise.using(db(), conn => {
  	var POID = param.POID;
    const sql = "SELECT postBy FROM Post WHERE POID = " + POID;
    console.log(sql);
    return conn.queryAsync(sql, []);
    // console.log("???????????????????11111")
    // var username = data[0].username;
    // const sql1 = "SELECT petBreed AS breed FROM User WHERE username = ?"
    // console.log("???????????????????")
    // return conn.queryAsync(sql1, [username]);
  });
};
