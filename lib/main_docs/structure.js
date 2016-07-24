'use strict';

const spyroHeader = require('../spyroHeader');
const structure = `${spyroHeader}

Folder structure for the starter kit.

  Name                             Description
  ---------------------------------------------------------------------------------------------------------------
  Config                        |  Configuration settings for the micro service are placed here.
  Controllers                   |  Controllers handle incoming request and perform necessary operations.
  Event Handlers                |  Event handlers act as consumers to broadcasted events from kafka producers.
  Models                        |  Models integrate with the database and provide a nice interface to be accessed
                                |  from within your code.
  Db                            |  Contains migrations that can be used to easily update the database.
  Mock Servers                  |  All micro services within andela are contained in this sub repo. Micro services
                                |  that depend on other micro services can use the files within as a representation
                                |  of the actual microservice for unit/integration testing.
  Server                        |  File(s) to setup the server are placed here.
  Tests                         |  Tests for the application are placed here.
`;

module.exports = structure;
