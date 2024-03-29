'use strict';

const Promise = require('bluebird');

const db = require('../../config/db');

module.exports = (param) => {

  const name = param.name;
  const PID = param.PID;

  const DOB = param.DOB;
  const breed = param.breed;
  const kind =param.kind;
  const gender = param.gender;

  return Promise.using(db(), conn => {
    const sql = "INSERT INTO Pet (DOB,breed,kind,gender,PID,name) VALUES ('"+DOB+"','"+breed+"','"+kind+"','"+gender+"','"+PID+"','"+name+"')";
    console.log(sql);
    return conn.queryAsync(sql, [DOB,breed,kind,gender,PID,name]);
  });
};
