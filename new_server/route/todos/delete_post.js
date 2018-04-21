'use strict';

const Promise = require('bluebird');

const todoDao = require('../../model/todo');
const sendError = require('../../helper/sendError');

module.exports = (req, res) => {
  const POID = req.params.POID;
// console.log(date)
// console.log(image)


  Promise.resolve()
  .then(() => {
    return get_result(POID);
  })
  .then((data) => {
    res.status(200).send({
      msg: "success"
    })
  })
  .catch(err => {
    sendError(res, err);
  });
};

function get_result(POID) {
  return todoDao.delete_post({
    POID:POID

  });

}