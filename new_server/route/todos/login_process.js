'use strict';

const Promise = require('bluebird');

const todoDao = require('../../model/todo');
const sendError = require('../../helper/sendError');

module.exports = (req, res) => {
  const username = req.params.username;
  const password = req.params.password;
  Promise.resolve()
  // .then(() => {
  //   return if_username_exists(username);
  // })
  .then(() => {
    return get_result(username);
  })
  .then((data) => {
    if(!data[0]){
      res.status(404).send({
          message: 'username not exist'
      })
    }
    else{
      var ret =  (data[0].password == password);
      return ret;
    }
  })
  .then((ret) => {
    if(ret){
      res.status(200).send({
          message: 'you have successfully logged in'
      })
    }
    else{
      res.status(404).send({
          message: 'password not correct'
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