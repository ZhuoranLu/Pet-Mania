'use strict';

const Promise = require('bluebird');

const todoDao = require('../../model/todo');
const sendError = require('../../helper/sendError');
const cp = require('child_process')

module.exports = (req, res) => {
  Promise.resolve()
  .then(() => {
    cp.exec('python2 ../../cat_classifier/face_detection.py ragdoll.jpeg', (err, stdout,stderr) => {

    if (err)
      console.log('stderr',err);
    if (stdout)
      console.log('stdout',stdout); 
  })
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

// function get_result() {
//   return todoDao.get_POID({
//   });
// }