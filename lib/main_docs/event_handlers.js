'use strict';

const spyroHeader = require('../spyroHeader');
const config = `${spyroHeader}

Files contained within this folder:

  index.js                Configuration settings to initialize the kafka consumer
  register_events.js      Setup various handlers for different emitted events
  sample_handler.js       Example kafka consumer/handler that is called when a registered event is emitted

Handlers subscribe to events broadcasted to the message broker on a set of topics. The starter kit uses kafka's group
consumers which allow for multiple instances of the same service with only one instance receiving a published event.

- The sample_handler file should be replaced with actual handlers

${'Customization'.bold}

The only modifications necessary is to assign a unique strategy name to the 'strategyName' variable, group id to
the 'groupId' variable and an array of topics to the subscriptions variable. This should be done in the ${'index.js'.red}
file.
`;

module.exports = config;
