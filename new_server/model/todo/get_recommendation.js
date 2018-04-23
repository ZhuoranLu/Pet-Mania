'use strict';

const Promise = require('bluebird');

const db = require('../../config/db');

module.exports = (param) => {
	const username = param.username;
  return Promise.using(db(), conn => {
     	 const sql = "(SELECT DISTINCT petBreed"
    			+ " FROM Post"
    			+ " INNER JOIN (SELECT likedPOID FROM likedPOID WHERE username = ? ) AS t ON t.likedPOID = Post.POID"
    			+ " INNER JOIN User ON User.username = Post.postBy) ORDER BY petBreed DESC";
    console.log(sql);
    return conn.queryAsync(sql, [username]);
  });
};
