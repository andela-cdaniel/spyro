'use strict';

require('colors');
const spyroHeader = require('./spyroHeader');

const help = `${spyroHeader}

Spyro is a simple command line utility that helps to provide documentation for the starter kit(s) provided
to quickly build out micro services in andela.

${'Usage Guide:'.bold}

  Command                         Definition
  -------------------------------------------------------------------------------------------------
  spyro new FOLDER_NAME        |  Create a new micro service application (Node js).
  spyro -h, [--help], [help]   |  Show this help document.
  spyro doc:structure          |  Explain document structure of the starter kit.
  spyro doc:config             |  Show documentation for the config folder and it's content.
  spyro doc:controllers        |  Show documentation for the controller folder and it's content.
  spyro doc:db                 |  Show documentation for the db folder and it's content.
  spyro doc:models             |  Show documentation for the models folder and it's content.
  spyro doc:event_handlers     |  Show documentation for the event_handlers folder and it's content.
  spyro doc:mock_server        |  Show documentation for the mock_server folder and it's content.
  spyro doc:server             |  Show documentation for the server folder and it's content.
  spyro doc:kafka_producer     |  Show documentation for the kafka producer file.
`;

module.exports = help;
