'use strict';

const Promise = require('bluebird');

const db = require('../../config/db');

module.exports = (param) => {

  var username = param.username;

  return Promise.using(db(), conn => {
    const sql = "SELECT * FROM Post ORDER BY likes DESC" ;
    console.log(sql);
    return conn.queryAsync(sql, []);
  });
};
