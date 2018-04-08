'use strict';

const Promise = require('bluebird');

const db = require('../../config/db');
  // console.log("fk111");
module.exports = (param) => {
  console.log("param = "+param);

  const follower_username = param.follower_username;
  const followee_username = param.followee_username;
  console.log("follower_username "+follower_username);

  return Promise.using(db(), conn => {
    // const sql = "INSERT INTO "
    const sql = 'INSERT INTO following (follower,followee) VALUES (?,?)'
    // const sql = `update todo set done=? where id=?`;
    return conn.queryAsync(sql, [follower_username, followee_username]);
  });
};

// UPDATE table_name
// SET column1 = value1, column2 = value2, ...
// WHERE condition