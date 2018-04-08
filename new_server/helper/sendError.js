'use strict';

module.exports = function sendError(res, err) {
  res.send({
    data: {},
    status: {
      msg: err.message ? err.message : 'Server Not Found',
      code: err.code ? err.code : 404
    }
  });
};
