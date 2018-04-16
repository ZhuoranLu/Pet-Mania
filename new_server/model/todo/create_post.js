'use strict';

const Promise = require('bluebird');

const db = require('../../config/db');

module.exports = (param) => {

  const date = param.date;
  const image = param.image;

  const text = param.text;
  const likes = 0;
  const POID = param.POID;
  const postBy = param.postBy;

  return Promise.using(db(), conn => {
    const sql = "INSERT INTO Post (date,image,text,likes,POID,postBy) VALUES (?,?,?,?,?,?)";
    console.log(sql);
    return conn.queryAsync(sql, [date,image,text,likes,POID,postBy]);
  });
};
