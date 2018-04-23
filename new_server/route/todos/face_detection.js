'use strict';

const Promise = require('bluebird');

const todoDao = require('../../model/todo');
const sendError = require('../../helper/sendError');
const cp = require('child_process');
var has_face = 0;
module.exports = (req, res) => {
  const picture_name = req.params.picture_name;
  Promise.resolve()
  .then(() => {
    const command = 'python ./cat_classifier/face_detection.py '+ picture_name;
    // console.log(command)
    var result = cp.exec(command, (err, stdout,stderr) => {

    // if (err){
    //   console.log('stderr',err.code);
    //   return err.code;
    // }else{
    //   return 0;
    // }
    console.log(stdout);
    // console.log(err)
    if(err){
      if(err.code == 1){
        res.status(200).send({
          message: "get face"
        })
      }else{
        res.status(404).send({
          message: "error in face_detection"
        })
      }
    }else{
      res.status(404).send({
        message: "there is no face"
      })
    }
  })
  })
  // .then((has_face) => {
  //   if(has_face){
  //       res.status(200).send({
  //       data: data
  //   })}else{
  //       // console.log(has_face)
  //       res.status(404).send({
  //       message: "there is no face"
  //   })
  //   }

  // })
  .catch(err => {
    sendError(res, err);
  });
};

// function get_result() {
//   return todoDao.get_POID({
//   });
// }
