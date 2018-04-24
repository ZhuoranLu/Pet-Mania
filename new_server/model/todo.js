'use strict';

const obj = {};
module.exports = obj;

// obj.list = require('./todo/list');
// obj.single = require('./todo/single');
// obj.add = require('./todo/add');
// obj.remove = require('./todo/remove');
// // console.log(obj.remove);
// obj.update = require('./todo/update');
// obj.pet = require('./todo/pet');

obj.search_from_all = require('./todo/search_from_all')

obj.get_user_following = require('./todo/get_user_following')
obj.get_user_likedPOID = require('./todo/get_user_likedPOID')
obj.update_following = require('./todo/update_following')
obj.update_likedPOID = require('./todo/update_likedPOID')
obj.delete_likedPOID = require('./todo/delete_likedPOID')
obj.update_user_info = require('./todo/update_user_info')
obj.login_get_password = require('./todo/login_get_password')
obj.login_check_username = require('./todo/login_get_password')
obj.signup_user = require('./todo/signup_user')
obj.create_post = require('./todo/create_post')
obj.delete_post = require('./todo/delete_post')
obj.count_follower = require('./todo/count_follower')
obj.count_followee = require('./todo/count_followee')
obj.fetch_profile_post = require('./todo/fetch_profile_post')
obj.fetch_following_post = require('./todo/fetch_following_post')
obj.get_user_info = require('./todo/get_user_info')
obj.search_exact_is = require('./todo/search_exact_is')
obj.get_POID = require('./todo/get_POID')
obj.count_Post = require('./todo/count_Post')
obj.search_keyword = require('./todo/search_keyword')
obj.get_recommendation = require('./todo/get_recommendation')
obj.judge_following_relation = require('./todo/judge_following_relation')
obj.get_breed = require('./todo/get_breed')
obj.update_likes= require('./todo/update_likes')
obj.get_breed = require('./todo/get_breed_step2')
obj.isLike= require('./todo/isLike')
obj.isFollow= require('./todo/isFollow')
obj.unfollow= require('./todo/unfollow')
obj.fake_recommendation= require('./todo/fake_recommendation')
obj.get_post_byBreed = require('./todo/get_post_byBreed')
// obj.get_head = require('./todo/get_head')
// obj.count = require('./todo/count')
obj.update_all_user_info = require('./todo/update_all_user_info')
