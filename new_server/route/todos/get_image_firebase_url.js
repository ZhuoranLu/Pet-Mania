'use strict';

const Promise = require('bluebird');

const todoDao = require('../../model/todo');
const sendError = require('../../helper/sendError');

module.exports = (req, res) => {
  const firebase_url = req.headers.firebase_url;
  Promise.resolve()
  .then(() => {
  // var fs = require('fs'),request = require('request');

  // var download = function(uri, filename, callback){
  // request.head(uri, function(err, res, body){
  //   console.log('content-type:', res.headers['content-type']);
  //   console.log('content-length:', res.headers['content-length']);

  //   request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);

  //   fs.writeFile('image.png', chunk, function (err) {
  //       if (err) throw err;
  //       console.log('It\'s saved!');
  //   });
  //   });
  // };

  // download('https://www.google.com/images/srpr/logo3w.png', 'google.png', function(){
  //   console.log('done');
  // });
var fs      = require('fs');
var request = require('request');
// Or with cookies
// var request = require('request').defaults({jar: true});

request.get({url: firebase_url, encoding: 'binary'}, function (err, response, body) {
  const original_dir = "./cat_classifier/test_original_pictures/";
  const picname = "temp_miao.jpeg"
  fs.writeFile(original_dir+picname, body, 'binary', function(err) {
    if(err){
      res.status(404).send({
        message: "Error in saving"
      })
    }
    else{
      res.status(200).send({
        message: "The picture was saved in "+original_dir+ "\nas " + picname
      })
    }
  }); 
});
  })

  .catch(err => {
    sendError(res, err);
  });
};
