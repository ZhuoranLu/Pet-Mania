'use strict';

module.exports = function (req, res, next) {
  const key = req.query.key;
  if (key === 'secretkey') return next();

  res.send({
    data: 'access deny!'
  });
};
