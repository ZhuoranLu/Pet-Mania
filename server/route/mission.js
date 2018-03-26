'use strict';

const express = require("express");
const router = express.Router();
module.exports = router;

router.get('/r1', require('./mission/r1'));
router.get('/r2', require('./mission/r2'));