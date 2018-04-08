'use strict';

const Promise = require('bluebird');

const db = require('../../config/db');
  // console.log("fk111");
module.exports = (param) => {
  console.log("param = "+param);

  const username = param.username;
  const column = param.column;
  const new_value = param.new_value

  return Promise.using(db(), conn => {
    // const sql = "INSERT INTO "
    const sql = 'UPDATE User SET '+ column + '= ? WHERE username = ?'
    // const sql = `update todo set done=? where id=?`;
    return conn.queryAsync(sql, [new_value, username]);
  });
};