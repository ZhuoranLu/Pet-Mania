'use strict';

const Promise = require('bluebird');

const db = require('../../config/db');

module.exports = (param) => {
	const username = param.username;
  return Promise.using(db(), conn => {
  	// , COUNT(f1.follower) AS num_follower,COUNT(f2.followee) AS num_followee
    const sql = "SELECT User.name AS name, User.region AS region, User.petName AS petName, (SELECT COUNT(POID) FROM Post WHERE postBy = ?) AS num_post,"
    			+ "(SELECT COUNT(follower) FROM following WHERE followee = ?) AS num_follower, "
    			+ "(SELECT COUNT(followee) FROM following WHERE follower = ?) AS num_followee "
    			+ " FROM User" 
    			// + " INNER JOIN Post ON Post.postBy = User.username "
    			// + " INNER JOIN following f1 ON f1.followee = User.username "
    			// + " INNER JOIN following f2 ON f2.follower = User.username "
    			+ " WHERE User.username = ?"
    console.log(sql);
    return conn.queryAsync(sql, [username,username,username,username]);
  });
};
