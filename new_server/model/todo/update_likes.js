'use strict';

const Promise = require('bluebird');

const db = require('../../config/db');
  // console.log("fk111");
module.exports = (param) => {
  console.log("param = "+param);

  const POID = param.POID;
  const likes = param.likes;

  return Promise.using(db(), conn => {
    // const sql = "INSERT INTO "
    // INSERT INTO card(cardno, cardnum) SELECT '111', '100' FROM DUAL WHERE NOT EXISTS(SELECT cardno FROM card WHERE cardno = '111');

    const sql = "UPDATE Post SET likes = " 
                + likes
                + " WHERE POID = "
                + POID
    // const sql = `update todo set done=? where id=?`;
    console.log(sql);
    return conn.queryAsync(sql, [POID, likes]);
  });
};