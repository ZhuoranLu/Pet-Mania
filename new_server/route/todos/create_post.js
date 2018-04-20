'use strict';

const Promise = require('bluebird');

const todoDao = require('../../model/todo');
const sendError = require('../../helper/sendError');

module.exports = (req, res) => {
  const date = req.params.date;
  const image = req.body.image;
  const text = req.body.text;
  const postBy = req.params.postBy;
  var POID = 0;
// console.log(date)
// console.log(image)


  Promise.resolve()
  .then(() => {
    return get_POID();
  })
  .then((data) => {
    POID = data[0].max_poid + 1;
    return POID;
  })
  .then((POID) => {
    console.log(POID)

    // var storageRef = firebase.storage().ref().child("Whatever your path is in Firebase Storage");
    //   var imageRef = "Your path in the Realtime Database";

    //   storageRef.getDownloadURL().then(function(url) {
    //     imageRef.child("image").set(url);
    // }); 

    // var task = storageRef.putString(image, 'base64').then(function(snapshot) {
    //      console.log('Uploaded a base64 string!');
    // });

    return get_result(date,image,text,POID,postBy);
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