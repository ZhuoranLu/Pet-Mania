'use strict';

const Promise = require('bluebird');

const todoDao = require('../../model/todo');
const sendError = require('../../helper/sendError');

module.exports = (req, res) => {
  const username = req.params.username;
  const POID = req.params.POID;
  Promise.resolve()
  .then(() => {
    return get_result(username,POID);
  })
  .then((data) => {
    if(data[0]){
      res.status(200).send({
        msg:'user liked this POID'
      })
    }
    else{
      res.status(404).send({
        msg:"user didn't like this POID"
      })
    }
  })
  .catch(err => {
    sendError(res, err);
  });
};

function get_result(username,POID) {
  return todoDao.isLike({
    username:username,
    POID:POID
  });

}