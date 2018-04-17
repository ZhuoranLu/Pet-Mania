'use strict';

const Promise = require('bluebird');

const todoDao = require('../../model/todo');
const sendError = require('../../helper/sendError');

module.exports = (req, res) => {
  const date = req.body.date;
  const image = req.body.image;
  const text = req.body.text;
  const POID = req.body.POID;
  const postBy = req.body.postBy;

  Promise.resolve()
  .then(() => {
    return get_result(date,image,text,POID,postBy);
  })
  .then((data) => {
    
  })
  .catch(err => {
    sendError(res, err);
  });
};

function get_result(date,image,text,POID,postBy) {
  return todoDao.create_post({
  date: req.body.date,
  image: req.body.image,
  text:req.body.text,
  POID:req.body.POID,
  postBy:req.body.postBy

  });

}