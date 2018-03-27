'use strict';

const Promise = require('bluebird');

const db = require('../../config/db');
  // console.log("fk111");
module.exports = (param) => {
  console.log("param = "+param);

  const todoId = param.todoId;
  console.log('todoId'+todoId);
  const done = param.done;
  console.log("done = "+ done);
  return Promise.using(db(), conn => {
    const sql = 'UPDATE Pet SET name = \''+todoId+'\' WHERE PID = '+ done;
    console.log("sql = "+ sql)
    // const sql = `update todo set done=? where id=?`;
    return conn.queryAsync(sql, [done, todoId]);
  });
};

// UPDATE table_name
// SET column1 = value1, column2 = value2, ...
// WHERE condition