'use strict';

const Promise = require('bluebird');

const todoDao = require('../../model/todo');
const sendError = require('../../helper/sendError');
// console.log("wocaonima meiyou sssss")

module.exports = (req, res) => {
  const todoId = req.params.todo_id;
  console.log(todoId);
  Promise.resolve()
  .then(() => {
    return getTodo(todoId);
  })
  .then((data) => {
    res.send({
      data: data,
      status: {
        code: 200,
        msg: 'ok'
      }
    })
  })
  .catch(err => {
    sendError(res, err);
  });
};

function getTodo(todoId) {
  console.log("wocaonima snima de todo")

  console.log(todoId);
  return todoDao.single({
    todoId: todoId
  });
}
