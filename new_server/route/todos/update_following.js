'use strict';

const Promise = require('bluebird');

const todoDao = require('../../model/todo');
const sendError = require('../../helper/sendError');

module.exports = (req, res) => {
  const todoId = req.params.todo_id;
  const done = req.params.todo_id2;
  // const done = req.body.done;

  Promise.resolve()
  .then(() => {
    return updateTodo(todoId, done);
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

function updateTodo(id, done) {
  return todoDao.update({
    todoId: id,
    done: done
  })
}
