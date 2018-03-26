'use strict';

module.exports = function sendError(res, err) {
  res.send({
    data: {},
    status: {
      msg: err.message ? err.message : '服务器异常',
      code: err.code ? err.code : 999
    }
  });
};