'use strict';

const Promise = require('bluebird');

const db = require('../../config/db');

module.exports = (param) => {
	const username = param.username;
	const POID= param.POID;
  	return Promise.using(db(), conn => {
    const sql = "SELECT * FROM likedPOID WHERE username = ? AND likedPOID = " + POID;
    return conn.queryAsync(sql, [username]);
  });
};
