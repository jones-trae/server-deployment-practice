'use strict';


module.exports = function(req, res, next) {
  console.log(req.method);
  next();
};