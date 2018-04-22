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
    const sql = "SELECT postBy AS username FROM Post WHERE POID = " + POID;
    var data =  conn.queryAsync(sql, []);
    var username = data[0].username;
    const sql = "SELECT petBreed AS breed FROM User WHERE username = ?"
    return conn.queryAsync(sql, [username]);
  });
};
