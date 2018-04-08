'use strict';

const Promise = require('bluebird');

const todoDao = require('../../model/todo');
const sendError = require('../../helper/sendError');


module.exports = (req, res) => {
  const from = req.params.from;
  const where = req.params.where;
  const like = req.params.like;

  Promise.resolve()
  .then(() => {
    return search_result(from,where,like);
  })
  .then((data) => {
    res.send({
      data: data,
      status: {
        code: 200,
        msg: 'ok'
      }
    })
  })
  .catch(err => {
    sendError(res, err);
  });
};

function search_result(from,where,like) {
  return todoDao.search_from_all({
    from: from,
    where: where,
    like: like
  });
}
