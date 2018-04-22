'use strict';

const Promise = require('bluebird');

const todoDao = require('../../model/todo');
const sendError = require('../../helper/sendError');

module.exports = (req, res) => {
  const username = req.params.username;
  const likedPOID = req.params.likedPOID;

  Promise.resolve()
  .then(() => {
    return updateTodo(username, likedPOID);
  })
  .then((data) => {
    res.status(200).send({
      data: data
      // status: {
      //   code: 200,
      //   msg: 'ok'
      // }
    })
  })
  .catch(err => {
    sendError(res, err);
  });
};

function updateTodo(username, likedPOID) {
  return todoDao.delete_likedPOID({
    username: username,
    likedPOID: likedPOID
  })
}