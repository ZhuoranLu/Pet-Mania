'use strict';

const Promise = require('bluebird');

const todoDao = require('../../model/todo');
const sendError = require('../../helper/sendError');


module.exports = (req, res) => {
  const from = req.params.from;
  const where = req.params.where;
  const content = req.params.content;

  Promise.resolve()
  .then(() => {
    return search_result(from,where,content);
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

function search_result(from,where,content) {
	console.log("wpocainima")
  return todoDao.search_exact_is({
    from: from,
    where: where,
    content: content
  });
}
