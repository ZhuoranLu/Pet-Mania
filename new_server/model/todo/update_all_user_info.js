// 'use strict';

// const Promise = require('bluebird');

// const db = require('../../config/db');
//   // console.log("fk111");
// module.exports = (param) => {
//   console.log("param = "+param);

//   const username = param.username;
//   const password = param.password;
//   const DOB = param.DOB;
//   const gender = param.gender;
//   const name = param.name;
//   const region = param.region;
//   const petName = param.petName;
//   const petKind = param.petKind;
//   const petBreed = param.petBreed;
//   const petGender = param.petGender;
//   const head = param.head;

//   return Promise.using(db(), conn => {
//     // const sql = "INSERT INTO "
// //     UPDATE Customers
// // SET ContactName = 'Alfred Schmidt', City= 'Frankfurt'
// // WHERE CustomerID = 1;
// console.log(username)
//     const sql = 'UPDATE User SET password=?, DOB=?, gender=?, name=?,'+
//     'region=?, petName=?, petKind=?, petBreed=?, petGender=?, head=? WHERE username = ?'
//     // const sql = `update todo set done=? where id=?`;
//     console.log(sql)
//     return conn.queryAsync(sql, [password, DOB,gender,name,region,petName,petKind,petBreed,petGender,head,username]);
//   });
// };