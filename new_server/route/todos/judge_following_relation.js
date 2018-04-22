'use strict';

const Promise = require('bluebird');

const todoDao = require('../../model/todo');
const sendError = require('../../helper/sendError');

module.exports = (req, res) => {
  const follower = req.params.follower;
  const followee = req.params.followee;
  Promise.resolve()
  .then(() => {
    return get_result(follower,followee);
  })
  .then((data) => {
    console.log(data)
    res.status(200).send({
      data: data
    })
  })
  .catch(err => {
    sendError(res, err);
  });
};

function get_result(follower,followee) {
  return todoDao.judge_following_relation({
    follower: follower,
    followee: followee
  });
}