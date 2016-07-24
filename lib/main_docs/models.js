'use strict';

const emoji = require('node-emoji').emoji;
const spyroHeader = require('../spyroHeader');
const db = `${spyroHeader}

The models help provide an easy interface to communicate with the database from within your code. The starter kit
comes with an example model that shows how models are defined (models are defined using migrations). There is
no need to manually update the model files when migrations are being used as this can be entirely handled by
migrations.

${'Sequelize-cli'.underline} is used to manage migrations and it's documentation can be found here:

https://github.com/sequelize/cli

${emoji.star2}  tip: Use command + click to open links from the terminal.
`;

module.exports = db;
