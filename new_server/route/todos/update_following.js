'use strict';

const Promise = require('bluebird');

const todoDao = require('../../model/todo');
const sendError = require('../../helper/sendError');

module.exports = (req, res) => {
  const follower_username = req.params.follower_username;
  const followee_username = req.params.followee_username;
  console.log(followee_username)
  console.log(follower_username)
  // const done = req.body.done;

  Promise.resolve()
  .then(() => {
    return updateTodo(follower_username, followee_username);
  })
  .then((data) => {
    res.status(200).send({
      data: data
      // status: {
      //   code: 200,
      //   msg: 'ok'
      // }
    })
  })
  .catch(err => {
    sendError(res, err);
  });
};

function updateTodo(follower_username, followee_username) {
  return todoDao.update_following({
    follower_username: follower_username,
    followee_username: followee_username
  })
}
