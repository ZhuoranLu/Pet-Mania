'use strict';

const Promise = require('bluebird');

const db = require('../../config/db');

module.exports = (param) => {
	const follower = param.follower;
	const followee = param.followee;
	console.log(follower)
	console.log(followee)
  	return Promise.using(db(), conn => {
    const sql = "select COUNT(*) AS 'count' from following where (follower = ? AND followee = ?)";
    return conn.queryAsync(sql, [follower,followee]);
  });
};
