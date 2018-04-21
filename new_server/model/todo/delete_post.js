'use strict';

const Promise = require('bluebird');

const db = require('../../config/db');

module.exports = (param) => {

  var POID = param.POID;

  return Promise.using(db(), conn => {
    const sql = "DELETE FROM Post WHERE POID = " + POID;
    console.log(sql);
    return conn.queryAsync(sql, [POID]);
  });
};
