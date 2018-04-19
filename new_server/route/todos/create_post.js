'use strict';

const Promise = require('bluebird');

const todoDao = require('../../model/todo');
const sendError = require('../../helper/sendError');

module.exports = (req, res) => {
  const date = req.params.date;
  const image = req.body.image;
  const text = req.body.text;
  const POID = req.params.POID;
  const postBy = req.params.postBy;
console.log(date)
console.log(image)
  Promise.resolve()
  .then(() => {
    return get_POID();
  })
  .then((data) => {
    POID = data[0].max_poid + 1
  })
  .then(() => {
    return get_result(date,image,text,POID,postBy);
  })
  .then((data) => {
    data:data
  })
  .catch(err => {
    sendError(res, err);
  });
};
function get_POID() {
  return todoDao.get_POID({
  });
}

function get_result(date,image,text,POID,postBy) {
  return todoDao.create_post({
  date: date,
  image: image,
  text: text,
  POID: POID,
  postBy: postBy

  });

}