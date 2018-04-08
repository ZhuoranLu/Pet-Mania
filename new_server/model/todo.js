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
obj.update_followings = require('./todo/update_followings')
obj.get_user_following = require('./todo/get_user_following')
obj.get_user_likedPOID = require('./todo/get_user_likedPOID')
obj.login_get_password = require('./todo/login_get_password')
obj.signup_user = require('./todo/signup_user')