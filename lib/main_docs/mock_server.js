'use strict';

/*
 Todo: Add more information about the mock servers
*/

const spyroHeader = require('../spyroHeader');
const mockServers = `${spyroHeader}

The mock_server contains a mock of all andela micro services for testing purposes. A microservice that depends on
another can just use it's mock during unit/integration test.
`;

module.exports = mockServers;
