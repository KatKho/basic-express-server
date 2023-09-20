'use strict';

const validatorMiddleware = (req, res, next) => {
    const name = req.query.name;
    if (!name) {
        next(new Error('Name is missing'));
    } else {
        next();
    }
};

module.exports = validatorMiddleware;
