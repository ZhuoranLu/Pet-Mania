'use strict';

const Promise = require('bluebird');

const db = require('../../config/db');

module.exports = (param) => {

  const username = param.username;
  const password = param.password;
  const DOB = param.DOB;
  const gender = param.gender;
  const name = param.name;
  const region = param.region;
  const petName = param.petName;
  const following = param.following;
  const petKind = param.petKind;
  const petBreed = param.petBreed;
  const petGender = param.petGender;
  const createDate = param.createDate;
  const head = param.head;
  // username: username,
  //   password: password
  //   DOB: DOB,
  //   gender: gender,
  //   name: name,
  //   region: region,
  //   PetName: PetName,
  //   kind: kind,
  //   breed: breed,
  //   PetGender: PetGender
  //   createDate: today
  //    SQL INSERT EXAMPLE 
  //   INSERT INTO table_name (column1, column2, column3, ...)
  //   VALUES (value1, value2, value3, ...);
  return Promise.using(db(), conn => {
    const sql = "INSERT INTO User (username,password,DOB,gender,createDate,name,region,petBreed,petKind,petGender,petName,head) VALUES ("
              + "'" +username + "',"
              + "'" +password + "',"
              + "'" + DOB + "',"
              + "'" +gender + "',"
              + "'" + createDate + "',"
              + "'" +name + "',"
              + "'" +region + "',"
              + "'" +petBreed + "',"
              + "'" +petKind + "',"
              + "'" +petGender+ "',"
              + "'" +petName+ "',"
              + " ? )"
    console.log(sql);
    return conn.queryAsync(sql, [head]);
  });
};
