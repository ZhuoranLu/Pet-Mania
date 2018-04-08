'use strict';

const Promise = require('bluebird');

const todoDao = require('../../model/todo');
const sendError = require('../../helper/sendError');

module.exports = (req, res) => {
  const username = req.params.username;
  const new_following = req.params.new_following;
  // const done = req.body.done;

  Promise.resolve()
  .then(() => {
    return updateTodo(username, new_following);
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

function updateTodo(username, new_following) {
  return todoDao.update({
    username: username,
    new_following: new_following
  })
}
