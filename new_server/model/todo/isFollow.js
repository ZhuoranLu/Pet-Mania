'use strict';

const Promise = require('bluebird');

const db = require('../../config/db');

module.exports = (param) => {
	const follower = param.follower;
	const followee = param.followee;
  	return Promise.using(db(), conn => {
    const sql = "SELECT * FROM following WHERE follower = ? AND followee = ? ";
    console.log(sql)
    return conn.queryAsync(sql, [follower,followee]);
  });
};
