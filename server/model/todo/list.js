
const Promise = require('bluebird');

const db = require('../../config/db');

module.exports = () => {
  return Promise.using(db(), conn => {
    const sql = `SELECT * FROM Pet`;
    return conn.queryAsync(sql, []);
  });
};
