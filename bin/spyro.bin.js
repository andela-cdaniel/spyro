#!/usr/bin/env node

'use strict';

let options = require('../lib/options');
let Command = require('../lib/command');

new Command(options).process();
