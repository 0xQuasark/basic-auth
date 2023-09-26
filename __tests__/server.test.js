'use strict';

const supertest = require('supertest');
const app = require('../src/server.js').app;
const request = supertest(app);

