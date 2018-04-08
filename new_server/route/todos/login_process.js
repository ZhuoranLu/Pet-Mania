'use strict';

const Promise = require('bluebird');

const todoDao = require('../../model/todo');
const sendError = require('../../helper/sendError');

module.exports = (req, res) => {
  const username = req.params.username;
  const password = req.params.password;
  Promise.resolve()
  .then(() => {
    return get_result(username);
  })
  .then((data) => {
    var ret =  (data[0].password == password);
    return ret;
  })
  .then((ret) => {
    if(ret){
      res.send({
        status: {
          code: 200,
          msg: 'ok'
        }
      })
    }
    else{
      res.send({
        status: {
          code: 404,
          msg: 'gg'
        }
      })
    }
  })
  .catch(err => {
    sendError(res, err);
  });
};

function get_result(username) {
  // console.log(username)
  return todoDao.login_get_password({
    username: username
  });

}