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
// router.route('/login_check_username/:username').get(require('./todos/login_check_username'))
router.route('/login_process/:username/:password').get(require('./todos/login_process'))
router.route('/update_likedPOID/:username/:likedPOID').post(require('./todos/update_likedPOID'))
router.route('/delete_likedPOID/:username/:likedPOID').delete(require('./todos/delete_likedPOID'))
router.route('/add_user').post(require('./todos/add_user'))
router.route('/update_user_info/:username/:column/:new_value').put(require('./todos/update_user_info'))
router.route('/create_post/:date/:postBy').post(require('./todos/create_post'))
router.route('/fetch_profile_post/:username').get(require('./todos/fetch_profile_post'))
router.route('/fetch_following_post/:username').get(require('./todos/fetch_following_post'))
router.route('/get_user_info/:username').get(require('./todos/get_user_info'))
router.route('/search_exact_is/:from/:where/:content').get(require('./todos/search_exact_is'))
router.route('/get_POID').get(require('./todos/get_POID'))
router.route('/count_Post/:postBy').get(require('./todos/count_Post'))
router.route('/face_detection/:picture_name').get(require('./todos/face_detection'))
router.route('/face_classifier/:picture_name').get(require('./todos/face_classifier'))
router.route('/get_image_firebase_url').get(require('./todos/get_image_firebase_url'))
router.route('/delete_post/:POID').delete(require('./todos/delete_post'))
router.route('/search_keyword/:keyword').get(require('./todos/search_keyword'))
router.route('/get_recommendation/:username').get(require('./todos/get_recommendation'))
router.route('/update_likes/:POID/:likes').post(require('./todos/update_likes'))
router.route('/isLike/:username/:POID').get(require('./todos/isLike'))
router.route('/isFollow/:follower/:followee').get(require('./todos/isFollow'))
router.route('/unfollow/:follower/:followee').delete(require('./todos/unfollow'))
// router.route('/get_post_byBreed/:breed').get(require('./todos/get_post_byBreed'))
// router.route('/count').get(require('./todos/count'))
// router.route('/get_head').get(require('./todos/get_head'))
router.route('/fake_recommendation/:username').get(require('./todos/fake_recommendation'))
router.route('/update_following/:follower_username/:followee_username').post(require('./todos/update_following'))
router.route('/judge_following_relation/:follower/:followee').get(require('./todos/judge_following_relation'))
router.route('/update_all_user_info').post(require('./todos/update_all_user_info'))
// router.route('/single/:todo_id').get(require('./todos/single'));
// //two parameters to update
// router.route('/update/:todo_id/:todo_id2').put(require('./todos/update'));
// //
// router.route('/remove/:todo_id').delete(require('./todos/remove'));

// router.route('/:todo_id').get(require('./todos/pet'));
