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
    // INSERT INTO card(cardno, cardnum) SELECT '111', '100' FROM DUAL WHERE NOT EXISTS(SELECT cardno FROM card WHERE cardno = '111');

    const sql = 'INSERT INTO likedPOID (username,likedPOID) VALUES (?,?)'
    // const sql = `update todo set done=? where id=?`;
    return conn.queryAsync(sql, [username, likedPOID]);
  });
};