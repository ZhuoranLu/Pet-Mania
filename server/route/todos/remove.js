'use strict';

const Promise = require('bluebird');

const todoDao = require('../../model/todo');
const sendError = require('../../helper/sendError');

module.exports = (req, res) => {
  const todoId = req.params.todo_id;

  Promise.resolve()
  .then(() => {
    // console.log(removeTodo(todoId));
    return removeTodo(todoId);
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

function removeTodo(id) {
  return todoDao.remove({
    todoId: id
  })
}
