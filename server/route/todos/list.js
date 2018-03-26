'use strict';

const Promise = require('bluebird');

const todoDao = require('../../model/todo');
const sendError = require('../../helper/sendError');

module.exports = (req, res) => {
  Promise.resolve()
  .then(() => {
    return getTodoList();
  })
  .then((data) => {
    res.send({
      data: data,
      status: {
        code: 0,
        msg: 'ok'
      }
    })
  })
  .catch(err => {
    sendError(res, err);
  });
};

function getTodoList() {
  return todoDao.list();
}