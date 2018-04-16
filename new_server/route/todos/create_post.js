'use strict';

const Promise = require('bluebird');

const todoDao = require('../../model/todo');
const sendError = require('../../helper/sendError');

module.exports = (req, res) => {
  const username = req.params.username;
  Promise.resolve()
  .then(() => {
    return get_result(username);
  })
  .then((data) => {
    
  })
  .catch(err => {
    sendError(res, err);
  });
};

function get_result(username) {
  console.log(username)
  
  });

}