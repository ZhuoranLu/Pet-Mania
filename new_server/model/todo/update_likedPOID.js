'use strict';

const Promise = require('bluebird');

const db = require('../../config/db');
  // console.log("fk111");
module.exports = (param) => {
  console.log("param = "+param);

  const username = param.username;
  const likedPOID = param.likedPOID;

  return Promise.using(db(), conn => {
    // const sql = "INSERT INTO "
    const sql = 'INSERT INTO following (username,likedPOID) VALUES (?,?)'
    // const sql = `update todo set done=? where id=?`;
    return conn.queryAsync(sql, [username, likedPOID]);
  });
};