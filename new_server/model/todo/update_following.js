'use strict';

const Promise = require('bluebird');

const db = require('../../config/db');
  // console.log("fk111");
module.exports = (param) => {
  console.log("param = "+param);

  const username = param.username;
  const new_following = param.new_following;

  return Promise.using(db(), conn => {
    // const sql = "INSERT INTO "
    const sql = 'UPDATE User SET name = \''+username+'\' WHERE PID = '+ done;
    // const sql = `update todo set done=? where id=?`;
    return conn.queryAsync(sql, [done, todoId]);
  });
};

// UPDATE table_name
// SET column1 = value1, column2 = value2, ...
// WHERE condition