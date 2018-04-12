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
  const PetName = req.body.PetName;
  const kind =req.body.kind;
  const breed = req.body.breed;
  const PetGender = req.body.PetGender;
  
  Promise.resolve()
  .then(() => {
    return addTodo(username,password,DOB,gender,name,region,PetName,kind,breed,PetGender,createDate);
  })
  .then((data) => {
    res.status(200).send({
          message: 'success'
          data: data
    })
  })
  .catch(err => {
    sendError(res, err);
  });
};

function addTodo(username,password,DOB,gender,name,region,PetName,kind,breed,PetGender,createDate) {
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
  var createDate = yyyy + '-' + mm + '-' dd;
  return todoDao.signup_user({
    username: username,
    password: password
    DOB: DOB,
    gender: gender,
    name: name,
    region: region,
    PetName: PetName,
    kind: kind,
    breed: breed,
    PetGender: PetGender,
    createDate: createDate
  })
}
