'use strict';

const Promise = require('bluebird');

const db = require('../../config/db');

module.exports = (param) => {
  return Promise.using(db(), conn => {
  	// const sql = "(SELECT DISTINCT petBreed"
   //  			+ " FROM Post"
   //  			+ " INNER JOIN (SELECT likedPOID FROM likedPOID WHERE username = ? ) AS t ON t.likedPOID = Post.POID"
   //  			+ " INNER JOIN User ON User.username = Post.postBy) ORDER BY petBreed DESC";
  	const breed = param.breed;
    const sql = "SELECT DISTINCT POID, date,image,text,likes,postBy "
    			+ " FROM Post "
    			+ " INNER JOIN (SELECT * FROM User WHERE petBreed = ?) AS u1 ON u1.username = Post.postBy";
    console.log(sql);
    return conn.queryAsync(sql, [breed]);
  });
};
