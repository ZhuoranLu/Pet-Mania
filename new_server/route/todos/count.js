// 'use strict';
// //没用了这个文件
// const Promise = require('bluebird');

// const todoDao = require('../../model/todo');
// const sendError = require('../../helper/sendError');

// module.exports = (req, res) => {
//   console.log("worinidaye")
//   Promise.resolve()
//   .then(() => {
//     return get_result();
//   })
//   .then((data) => {
//     res.status(200).send({
//         data: data
//     })
//   })
//   .catch(err => {
//     sendError(res, err);
//   });
// };

// function get_result() {
//   return todoDao.count({
//   });

// }