'use strict';

const url = require('url');

module.exports = function(req, res, next) {
  const pathname = url.parse(req.originalUrl).pathname;
  if (pathname === '/secret') {
    next();
  } else {
    next('route');
  }
};

