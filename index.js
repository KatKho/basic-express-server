'use strict';

const server = require('./src/server');
const dotenv = require('dotenv');

dotenv.config();

const PORT = process.env.PORT || 3001;

server.start(PORT);