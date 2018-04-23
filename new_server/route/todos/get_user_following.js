'use strict';

const Promise = require('bluebird');

const todoDao = require('../../model/todo');
const sendError = require('../../helper/sendError');

module.exports = (req, res) => {
  const username = req.params.username;
  Promise.resolve()
  .then(() => {
    console.log("???")
    return get_result(username);
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

function get_result(username) {
  console.log(username)
  return todoDao.get_user_following({
    username: username
  });

}