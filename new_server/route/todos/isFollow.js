'use strict';

const Promise = require('bluebird');

const todoDao = require('../../model/todo');
const sendError = require('../../helper/sendError');

module.exports = (req, res) => {
  const follower = req.params.follower;
  const followee = req.params.followee;
  Promise.resolve()
  .then(() => {
    return get_result(follower,followee);
  })
  .then((data) => {
    if(data[0]){
      res.status(200).send({
        msg:'user followed this guy'
      })
    }
    else{
      res.status(404).send({
        msg:"user didn't follow this guy"
      })
    }
  })
  .catch(err => {
    sendError(res, err);
  });
};

function get_result(follower,followee) {
  return todoDao.isFollow({
    follower:follower,
    followee:followee
  });

}