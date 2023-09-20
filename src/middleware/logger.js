'use strict';

const loggerMiddleware = (req, res, next) => {
    console.log('Request Method: ' + req.method);
    console.log('Request Path: ' + req.path);
    next();
};

module.exports = loggerMiddleware;
