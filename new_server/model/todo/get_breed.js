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
    const sql = "SELECT MAX(POID) AS most_liked_POID FROM Post";
    console.log(sql);
    return conn.queryAsync(sql, []);
  });
};
