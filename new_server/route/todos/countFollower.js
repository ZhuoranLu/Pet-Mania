'use strict';
//没用了这个文件
const Promise = require('bluebird');

const todoDao = require('../../model/todo');
const sendError = require('../../helper/sendError');

module.exports = (req, res) => {
  const followee = req.params.followee;
  Promise.resolve()
  .then(() => {
    return get_result(followee);
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

function get_result(followee) {
  return todoDao.count_follower({
    followee: followee
  });

}