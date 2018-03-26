var express = require('express');
var mysql = require('mysql');
var app = express();

var connection = mysql.createPool({
  connectionLimit:50,
  host: "192.17.90.133",
  user: "servernotfound_u",
  password: "laozhuquanxidi1",
  database: "servernotfound_data"
});

connection.getConnection(function(error){
  if(error){
    console.log('connect to database error');
  }else{
    console.log('Connected to database');
  }
});
// app.get('/get_all_pets',function(req,resp){
//   connection.getConnection(function(error,tempCont){
//     if(error){
//       tempCont.release();
//       console.log('Error in app get');
//     }else{
//       console.log('connect app get');
//       tempCont.query("SELECT * FROM Pet",function(error,results){
//         tempCont.release();
//         if(error){
//           console.log('error in query');
//         }else{
//           resp.json(results);
//         }
//       })
//     }
//   });
// })

app.get('/get_kind/:taskid',function(req,resp){
  var taskid = req.params.taskid;
  console.log(taskid);
  connection.getConnection(function(error,tempCont){
    if(error){
      tempCont.release();
      console.log('Error in app get');
    }else{
      console.log('connect app get');
      tempCont.query("SELECT * FROM Post WHERE text LIKE '%"+taskid+"%' ",function(error,results){
        console.log("laozhuquanxidi1")
        console.log("SELECT * FROM Post WHERE text LIKE '%"+taskid+"%' ")
        tempCont.release();
        if(error){
          console.log('error in query');
        }else{
          resp.send(results);
        }
      })
    }
  });
})

app.get('/get_all_users',function(req,resp){
  connection.getConnection(function(error,tempCont){
    if(error){
      tempCont.release();
      console.log('Error in app get');
    }else{
      console.log('connect app get');
      tempCont.query("SELECT * FROM User",function(error,results){
        tempCont.release();
        if(error){
          console.log('error in query');
        }else{
          resp.render()
          // resp.json(results);
        }
      })
    }
  });
})

app.get('/get_all_posts',function(req,resp){

  connection.getConnection(function(error,tempCont){
    if(error){
      tempCont.release();
      console.log('Error in app get');
    }else{
      console.log('connect app get');
      tempCont.query("SELECT * FROM Post",function(error,results){
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

app.listen(1350)

