'use strict';

const Promise = require('bluebird');

const todoDao = require('../../model/todo');
const sendError = require('../../helper/sendError');

module.exports = (req, res) => {
  const username = req.params.username;
  Promise.resolve()
  .then(() => {
    return get_result(username);
  })
  .then((data) => {
    
    var obj = JSON.parse(data);
    console.log(obj)
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
  return todoDao.login_get_password({
    username: username
  });

}