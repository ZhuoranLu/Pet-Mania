'use strict';

const Promise = require('bluebird');

const todoDao = require('../../model/todo');
const sendError = require('../../helper/sendError');

module.exports = (req, res) => {
  const username = req.params.username;

  Promise.resolve(username)
  .then((username) => {
    return get_likedPOID(username) // get POID liked by the user
  })
  .then((data)=>{
    var poid_arr = []
    for(var index in data){
      poid_arr.push(data[index]["likedPOID"])
    }
    return poid_arr
  })
  // .then((data)=>{
  //   console.log(data)
  // })
  .then((poid_arr) => {
    var i = 0;
    var breedList = []
    for(i;i<poid_arr.length;i++){
      var POID = poid_arr[i];
      console.log(POID);
      var temp = get_breed(POID);
      if(temp[0]){
        console.log(temp[0].username);
        var temp1 = temp[0].username;
        var breed = get_breed_step2(temp1)
      }
    }
    return poid_arr;
  })
  .then((poid_arr) => {
    console.log(poid_arr)
    res.status(200).send({
      data: poid_arr
    })
  })
  .catch(err => {
    sendError(res, err);
  });
};
function get_favouriate(username) {
  // console.log(username)
  return todoDao.get_favouriate({
    username: username
  });
}
function get_breed(POID) {
  // console.log(username)
  return todoDao.get_breed({
    POID: POID
  });
}
function get_breed_step2(temp1) {
  // console.log(username)
  return todoDao.get_breed({
    temp1:temp1
  });
}

function get_result(username) {
  // console.log(username)
  return todoDao.get_user_following({
    username: username
  });
}

function get_likedPOID(username){
  return todoDao.get_user_likedPOID({
    username: username
  });
}