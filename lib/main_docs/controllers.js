'use strict';

const spyroHeader = require('../spyroHeader');
const controllers = `${spyroHeader}

Controllers handle incoming requests from the client side and communicate with the database if there
is any need to. Controllers are also where kafka events are broadcasted from.

- The starter kit comes with a sample_controller file that shows how a controller should be setup.
  Ideally you should replace this file with actual controller files
  
${'Naming convention for files'.bold}

Although, not strictly enforced, controller file names should be underscored much like the sample_controller
which serves as a guide.

${'How controller methods work'.bold}

Controllers receive two parameters when they are created, 'call' and 'callback', the call parameter contains
information about a request (if any is provided) and the callback parameter (which acts as a function) is used
to send a response back. As a convention the controller is not meant to directly save state to the database but
should instead broadcast an event to kafka which is then handled by the kafka consumers (which in this case would
be the event handlers).
`;

module.exports = controllers;
