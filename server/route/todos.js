'use strict';

const express = require("express");
const router = express.Router();
module.exports = router;

console.log("wocaonima")

router.route('/').get(require('./todos/list'));
router.route('/').post(require('./todos/add'));
router.route('/:todo_id').get(require('./todos/single'));
//two parameters to update
router.route('/:todo_id/:todo_id2').put(require('./todos/update'));
//
router.route('/remove/:todo_id').delete(require('./todos/remove'));


router.route('/:todo_id').delete(require('./todos/pet'));
