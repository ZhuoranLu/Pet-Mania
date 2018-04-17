'use strict';

const Promise = require('bluebird');

const db = require('../../config/db');

module.exports = (param) => {
	const follower = param.follower;
  return Promise.using(db(), conn => {
    const sql = "SELECT COUNT(followee) FROM following WHERE follower = ?";
    console.log(sql);
    return conn.queryAsync(sql, [follower]);
  });
};
