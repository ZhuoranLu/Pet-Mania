'use strict';

const Promise = require('bluebird');

const todoDao = require('../../model/todo');
const sendError = require('../../helper/sendError');

module.exports = (req, res) => {
  const username = req.params.username;
  var poid_arr = []
  Promise.resolve(username)
  .then((username) => {
    return get_rec(username) // get POID liked by the user
  })
  .then((data) => {
    if(data[0]){
      return data;
    }
    else{
      return get_result(username);
    }
  })
  .then((data) => {
    if(data[0].POID){
      res.status(200).send({
        data: data
    })
    }
    return get_post_byBreed(data[0].petBreed);
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
function get_rec(username) {
  // console.log(username)
  return todoDao.get_recommendation({
    username: username
  });
}
function get_result(username) {
  return todoDao.fake_recommendation({
    username:username
  });

}
function get_post_byBreed(breed) {
  return todoDao.get_post_byBreed({
    breed:breed
  });

}
