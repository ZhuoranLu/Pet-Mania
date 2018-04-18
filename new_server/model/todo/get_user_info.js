'use strict';

const Promise = require('bluebird');

const db = require('../../config/db');

module.exports = (param) => {
	const username = param.username;
  return Promise.using(db(), conn => {
    const sql = "SELECT User.name AS name, User.region AS region, User.petName AS petName "
    			+ "FROM User " 
    			+ "WHERE username = ? "
    console.log(sql);
    return conn.queryAsync(sql, [username]);
  });
};
