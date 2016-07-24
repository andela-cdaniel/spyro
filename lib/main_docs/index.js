'use strict';

const structure = require('./structure');
const config = require('./config');
const controllers = require('./controllers');
const db = require('./db');
const models = require('./models');
const eventHandlers = require('./event_handlers');
const mockServers = require('./mock_server');
const server = require('./server');
const producer = require('./kafka_producer');

module.exports = {
  structure,
  config,
  controllers,
  db,
  models,
  eventHandlers,
  mockServers,
  server,
  producer
};
