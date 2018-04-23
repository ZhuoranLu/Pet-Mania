'use strict';

const Promise = require('bluebird');

const todoDao = require('../../model/todo');
const sendError = require('../../helper/sendError');

module.exports = (req, res) => {
  const username = req.params.username;
  var poid_arr = []
  Promise.resolve(username)
  .then((username) => {
    return get_likedPOID(username) // get POID liked by the user
  })
  .then((data)=>{
    console.log(data)
    for(var index in data){
      poid_arr.push(data[index]["likedPOID"])
    }
    return poid_arr
  })
  // .then((data)=>{
  //   console.log(data)
  // })
  .then((poid_arr) => {
    // var i = 0;
    // var postByList = []
    // for(i;i<poid_arr.length;i++){
    //   var POID = poid_arr[i];
    //   console.log("poid")
    //   console.log(POID);
    //   console.log("----end")
    //   var temp = get_breed(POID);
    //   var promise = new Promise(function(resolve, reject) { ... }); 
    //   console.log("这步走到了没");
    //   // console.log(temp.data[0]["postBy"])
    //   console.log("这步走到了没22");
    //   postByList.push(temp);
    //   // if(temp[0]){
    //   //   console.log("-----");
    //   //   console.log(temp[0]["postBy"]);
    //   //   var temp1 = temp[0]["postBy"];
    //   //   var breed = get_breed_step2(temp1)
    //   //   if(breed[0]){
    //   //     breedList.push(breed[0].breed);
    //   //   }
    //   // }
    // }
    // console.log("走完")
    // return postByList;
  })
  .then((postByList) => {
    res.status(200).send({
        msg:"haha"
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