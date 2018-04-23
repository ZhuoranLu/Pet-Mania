'use strict';

const Promise = require('bluebird');

const todoDao = require('../../model/todo');
const sendError = require('../../helper/sendError');

module.exports = (req, res) => {
  const username = req.params.username;
  var poid_arr = []
  Promise.resolve(username)
  .then((username) => {
    return get_rec(username) // get POID liked by the user
  })
  .then((data) => {
    res.status(200).send({
        data:data
    })
  })
  .catch(err => {
    sendError(res, err);
  });
};
function get_rec(username) {
  // console.log(username)
  return todoDao.get_recommendation({
    username: username
  });
}
