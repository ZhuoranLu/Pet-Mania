'use strict';

const Promise = require('bluebird');

const db = require('../../config/db');
  // console.log("fk111");
module.exports = (param) => {
  console.log("param = "+param);

  const follower_username = param.follower_username;
  const followee_username = param.followee_username;

  return Promise.using(db(), conn => {
    // const sql = "INSERT INTO "
    const sql = 'DELETE FROM following WHERE follower = ? AND followee = ?'
    // const sql = `update todo set done=? where id=?`;
    console.log(sql)
    return conn.queryAsync(sql, [follower_username, followee_username]);
  });
};

// UPDATE table_name
// SET column1 = value1, column2 = value2, ...
// WHERE condition