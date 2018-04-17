'use strict';

const Promise = require('bluebird');

const todoDao = require('../../model/todo');
const sendError = require('../../helper/sendError');

module.exports = (req, res) => {
  const follower = req.params.follower;
  Promise.resolve()
  .then(() => {
    return get_result(follower);
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

function get_result(follower) {
  return todoDao.count_followee({
    follower: follower
  });

}