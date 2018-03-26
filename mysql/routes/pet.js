var express = require('express'),
    router = express.Router();
    // user = require('../models/user');

router.get('/get_all_pets',function(req,resp){
      connection.getConnection(function(error,tempCont){
        if(error){
          tempCont.release();
          console.log('Error in app get');
        }else{
          console.log('connect app get');
          tempCont.query("SELECT * FROM Pet",function(error,results){
            tempCont.release();
            if(error){
              console.log('error in query');
            }else{
              resp.json(results);
            }
          })
        }
    });
})
