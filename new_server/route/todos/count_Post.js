'use strict';
//没用了这个文件
const Promise = require('bluebird');

const todoDao = require('../../model/todo');
const sendError = require('../../helper/sendError');

module.exports = (req, res) => {
  const postBy = req.params.postBy;
  Promise.resolve()
  .then(() => {
    return get_result(postBy);
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

function get_result(postBy) {
  return todoDao.count_Post({
    postBy: postBy
  });

}