const express = require("express");
const router = express.Router();
module.exports = router;
console.log("wocaoni daye")


router.get('/single', require('./todo/single'));
router.get('/list', require('./todo/list'));
router.post('/add', require('./todo/add'));
router.post('/remove', require('./todo/remove'));
router.post('/update', require('./todo/update'));
router.get('/pet', require('./todo/pet'));
