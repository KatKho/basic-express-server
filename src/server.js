'use strict';

const express = require('express');
const cors = require('cors');
const app = express();              

const loggerMiddleware = require('./middleware/logger');
const validatorMiddleware = require('./middleware/validator');
const errorHandler404 = require('./error-handlers/404');
const errorHandler500 = require('./error-handlers/500');

app.use(cors());

app.use(loggerMiddleware);

app.get('/person', validatorMiddleware, (req, res) => {
  const name = req.query.name;
  res.json({ name: name });
});

app.use(errorHandler404);
app.use(errorHandler500);

module.exports = {
  app,
  start: (PORT) => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  },
};
