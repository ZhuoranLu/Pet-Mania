'use strict';

const Promise = require('bluebird');

const db = require('../../config/db');

module.exports = (param) => {
	const followee = param.followee;
  return Promise.using(db(), conn => {
    const sql = "SELECT COUNT(follower) FROM following WHERE followee = ?";
    console.log(sql);
    return conn.queryAsync(sql, [followee]);
  });
};
