'use strict';

const Promise = require('bluebird');

const todoDao = require('../../model/todo');
const sendError = require('../../helper/sendError');

module.exports = (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const DOB = req.body.DOB;
  const gender = req.body.gender;
  const name = req.body.name;
  const region = req.body.region;
  const petName = req.body.petName;
  const petKind =req.body.petKind;
  const petBreed = req.body.petBreed;
  const petGender = req.body.petGender;
  const head = req.body.head;
  const following = ""; //这边要改
  //----Create current date
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1; //January is 0!
  var yyyy = today.getFullYear();
  if(dd<10){
      dd='0'+dd;
  }
  if(mm<10){
      mm='0'+mm;
  }
  var createDate = yyyy + '-' + mm + '-' + dd;
  //-----end


  Promise.resolve()
  .then(() => {
    return get_result(username);
  })
  .then((data) => {
    if(!data[0]){
      return true;
    }
    if(data[0].password){
      res.status(404).send({
          message: 'username already exsits'
      })
    }
  })
  .then(() => {
    return addTodo(username,password,DOB,gender,name,region,petName,petKind,petBreed,petGender,createDate,head);
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

function addTodo(username,password,DOB,gender,name,region,petName,petKind,petBreed,petGender,createDate,head) {

  return todoDao.signup_user({
    username: username,
    password: password,
    DOB: DOB,
    gender: gender,
    name: name,
    region: region,
    petName: petName,
    petKind: petKind,
    petBreed: petBreed,
    petGender: petGender,
    createDate: createDate,
    head: head
  })
}
function get_result(username) {
  // console.log(username)
  return todoDao.login_get_password({
    username: username
  });

}
