'use strict';

const Promise = require('bluebird');

const todoDao = require('../../model/todo');
const sendError = require('../../helper/sendError');

module.exports = (req, res) => {
  const POID = req.params.POID;
  const likes = req.params.likes;

  Promise.resolve()
  .then(() => {
    return updateTodo(POID,likes);
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

function updateTodo(POID,likes) {
  return todoDao.update_likes({
    POID: POID,
    likes:likes
  })
}