'use strict';

/*
  Todo: Add more information about the kafka producer
*/

const spyroHeader = require('../spyroHeader');
const producer = `${spyroHeader}

The kafka producer file serves as configuration for setting up the application to emit events to kafka. It exposes a ${'start'.underline}
and an ${'emit'.underline} function.

The emit function is used to broadcast events to kafka. An example usage can be found in the ${'sample_controller'.underline}
file.
`;

module.exports = producer;
