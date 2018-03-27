'use strict';

const obj = {};
module.exports = obj;

obj.list = require('./todo/list');
obj.single = require('./todo/single');
obj.add = require('./todo/add');
obj.remove = require('./todo/remove');
// console.log(obj.remove);
obj.update = require('./todo/update');
obj.pet = require('./todo/pet');
