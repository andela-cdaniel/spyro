'use strict';

const spyroHeader = require('../spyroHeader');
const config = `${spyroHeader}

Files contained within this folder:

  config.js               Configuration settings for the entire application are placed here.
  database.json           Configuration specific to the database. This is used almost exclusively by sequelize-cli to
                          manage interactions with the database.

The config folder contains configuration settings for the application. It helps setup the various environments that the
application will be run, these include: 'development', 'testing', 'production' and 'staging'. The exposed config object
contains attributes for 'database' and 'service'. The database attribute contains the databse url that is used to interact
with the databse from within the codebase; the service attribute contains the host and port that the grpc server which
initializes the app will run on.

${'Database Connection'.bold}

The toolkit attempts to read database connection string from an environment variable named ${'DATABASE_URL.'.bold} If that is not
provided, it uses a default database url. The starter kit makes some assumptions for you about the default database url.
You will still need to manually create a database url that contains the information specified in the ${'config.js'.red} file.

While in development, you can create the necessary databases manually.

- Ensure you have postgresql installed and you can access the postgres terminal application.

Type 'psql' and then run this command in the postgres terminal:

${'CREATE ROLE postgres WITH LOGIN CREATEDB PASSWORD \'password\';'.blue.bold}

Alternatively, you can use the psql createuser utility to create a new postgres user directly from the terminal

${'createuser postgres -P -s'.blue.bold}

The next step would be to create the database itself

${'CREATE DATABASE db_name_dev;'.blue.bold}

Or

${'createdb db_name_dev'.blue.bold}

- Ensure you also create a database for the test environment as well (db_name_test)

Looking at index.js file in the root of the application, you will notice that the application attempts to create
the database directly if TEMPLATE_DB and POSTGRES_DB env variables are provided. This behaviour is only targeted
at the production environment.
`;

module.exports = config;
