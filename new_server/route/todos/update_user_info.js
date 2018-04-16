'use strict';

const Promise = require('bluebird');

const todoDao = require('../../model/todo');
const sendError = require('../../helper/sendError');

module.exports = (req, res) => {
  const username = req.params.username;
  const column = req.params.column;
  const new_value = req.params.new_value;

  Promise.resolve()
  .then(() => {
    return updateTodo(username, column, new_value);
  })
  .then((data) => {
    console.log(username);
    console.log(column);
    console.log(new_value);

    // if(!data[0]){

    // }
    if(!username || ! column || !new_value){
            res.status(404).send({
          message: 'info not exist'
      })
          }else{
                res.status(200).send({
      data: data
      // message: 'update successfully'
      // status: {
      //   code: 200,
      //   msg: 'ok'
      // }
    })
          }

  })
  .catch(err => {
    sendError(res, err);
  });
};

function updateTodo(username, column, new_value) {
  return todoDao.update_user_info({
    username: username,
    column: column,
    new_value: new_value
  })
}