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
    const command = 'python ./cat_classifier/classifier.py '+ picture_name;
    // console.log(command)
    var result = cp.exec(command, (err, stdout,stderr) => {

    // if (err){
    //   console.log('stderr',err.code);
    //   return err.code;
    // }else{
    //   return 0;
    // }
    console.log("std: " +stdout)
    console.log("err: "+ err)
    if(stdout){
      var result = parseInt(stdout,10);
      if(result <= 6 && result >= 0){
        res.status(200).send({
        message: "successfully classified",
        data: parseInt(stdout, 10)
      })
      }else{
        res.status(404).send({
          message: "error in classification"
        })
      }
    }else{
      if(err){
        if(err.code == 1){
          res.status(200).send({
            message: "successfully classified",
            data: parseInt(stdout, 10)
          })
        }}else{
        res.status(404).send({
          message: "error in classification"
        })
      }
    }

    // if(stdout){
    //   if(err.code < 7 && err.code >=0){
    //     console.log("mei kong wo cao nima ")
    //     console.log(err.code)
    //     res.status(200).send({
    //       message: "got it",
    //       data: err.code
    //   })
    //   }else{
    //       res.status(404).send({
    //       message:"error in classification"
    //     })
    //   }

    // }else{
    //     res.status(404).send({
    //       message:"error in classification"
    //     })
    // }
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
