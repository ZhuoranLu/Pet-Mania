const express = require("express");
const router = express.Router();
module.exports = router;

router.get('/list', require('./todo/list'));
router.post('/add', require('./todo/add'));
router.post('/remove', require('./todo/remove'));
router.post('/update', require('./todo/update'));