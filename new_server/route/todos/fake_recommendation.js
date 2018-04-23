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
    res.status(200).send({
        data: data
    })
  })
  .catch(err => {
    sendError(res, err);
  });
};

function get_result(username) {
  return todoDao.fake_recommendation({
    username:username
  });

}