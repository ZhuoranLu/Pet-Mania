'use strict';

const express = require("express");
const router = express.Router();
module.exports = router;

router.get('/', require('./secret/index'));