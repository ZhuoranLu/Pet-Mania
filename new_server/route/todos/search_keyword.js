'use strict';

const Promise = require('bluebird');

const todoDao = require('../../model/todo');
const sendError = require('../../helper/sendError');


module.exports = (req, res) => {
  const keyword = req.params.keyword;
  // console.log(keyword)

  Promise.resolve()
  .then(() => {
    return search_result(keyword);
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

function search_result(keyword) {
  return todoDao.search_keyword({
    keyword: keyword
  });
}
