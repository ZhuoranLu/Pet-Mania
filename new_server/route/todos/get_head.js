// 'use strict';

// const Promise = require('bluebird');

// const todoDao = require('../../model/todo');
// const sendError = require('../../helper/sendError');

// module.exports = (req, res) => {
//   Promise.resolve()
//   .then(() => {
//     return get_result();
//   })
//   .then((data) => {
//     var count = 0
//     for(var index in data){
//       count+=1
//     }
//     index = Math.floor(Math.random() * count)
//     console.log(index)
//     res.status(200).send({
//         data: data[index]
//     })
//   })
//   .catch(err => {
//     sendError(res, err);
//   });
// };
// function count() {
//   return todoDao.count({

//   });
// }
// function get_result(username) {
//   return todoDao.get_head({
//     username:username
//   });
// }