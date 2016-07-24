'use strict';

const emoji = require('node-emoji').emoji;
const spyroHeader = require('../spyroHeader');
const db = `${spyroHeader}

The db folder contains a migrations folder which serves as an easy means to make incremental updates to
the database. Migrations are handled entirely by the ${'sequelize-cli'.underline} package.

The starter kit comes with some example migration files that show how a migration is setup. Ideally, you
will use migrations to create tables in the database, add new columns, change existing columns, add index
to a column and a host of other things. Make sure to check out the documentation for ${'sequelize-cli'.underline}
that can be found here: https://github.com/sequelize/cli

${emoji.star2}  tip: Use command + click to open links from the terminal.
`;

module.exports = db;
