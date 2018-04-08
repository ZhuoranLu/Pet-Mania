'use strict';

const express = require("express");
const router = express.Router();
module.exports = router;

var bodyParser = require('body-parser')


// 创建 application/json 解析
// var jsonParser = bodyParser.json()

// // 创建 application/x-www-form-urlencoded 解析
// var urlencodedParser = bodyParser.urlencoded({ extended: false })

// POST /login 获取 URL编码的请求体
// app.post('/login', urlencodedParser, function (req, res) {
//   if (!req.body) return res.sendStatus(400)
//   res.send('welcome, ' + req.body.username)
// })

// POST /api/users 获取 JSON 编码的请求体
// app.post('/api/users', jsonParser, function (req, res) {
//   if (!req.body) return res.sendStatus(400)
//   // create user in req.body
// })

// console.log("wocaonima")

// router.route('/').get(require('./todos/list'));
// router.route('/add').post(require('./todos/add'));
router.route('/search_from_all/:from/:where/:like').get(require('./todos/search_from_all'))
router.route('/get_user_following/:username').get(require('./todos/get_user_following'))
router.route('/get_user_likedPOID/:username').get(require('./todos/get_user_likedPOID'))
router.route('/login_get_password/:username').get(require('./todos/login_get_password'))

//
// router.route('/single/:todo_id').get(require('./todos/single'));
// //two parameters to update
// router.route('/update/:todo_id/:todo_id2').put(require('./todos/update'));
// //
// router.route('/remove/:todo_id').delete(require('./todos/remove'));

// router.route('/:todo_id').get(require('./todos/pet'));
