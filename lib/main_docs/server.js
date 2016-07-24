'use strict';

const spyroHeader = require('../spyroHeader');
const server = `${spyroHeader}

This folder contains configurations for setting up the server. Andela micro services use ${'grpc'.underline} as the
underlying protocol for request/response of resources.

${'What is GRPC?'.bold}

gRPC is a high performance, open source, general RPC framework that puts mobile and HTTP/2 first. The starter kit uses
the gRPC framework for all synchronous communications between services. gRPC provides a lot of benefits when used in
building microservices.

gRPC uses protocol buffers to define a standard interface to be used for communication between micro services. This
interface is defined in the mock_server. The mock server folder comes with examples on how to go about defining a new
one.
`;

module.exports = server;
