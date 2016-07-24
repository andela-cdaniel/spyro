'use strict';

require('colors');

const emoji = require('node-emoji').emoji;
const spawn = require('child_process').spawn;

const version = require('./version');
const help = require('./help_doc');
const docs = require('./main_docs');

const finalSteps = require('./final_steps');

class Command {
  constructor(args) {
    this.args = args;
  }

  showCurrentVersion() {
    console.log(version);
  }

  showHelp() {
    console.log(help);
  }

  generateNewProject() {

    if (this.args.length < 2 ) {
      console.log('Missing argument for path name.\nExample Usage: spyro new test-micro-service');
    } else {
      let folder_name = this.args[1];
      let cmd = spawn('git', ['clone', 'git@github.com:andela/micro-node-starter-kit.git', folder_name], {
        stdio: 'inherit'
      });

      cmd.on('close', (code) => {
        if (code > 0) return;

        console.log(finalSteps(folder_name));
      });

    }
  }

  showDoc(arg) {
    switch (arg) {
    case 'doc:structure':
      console.log(docs.structure);
      break;
    case 'doc:config':
      console.log(docs.config);
      break;
    case 'doc:controllers':
      console.log(docs.controllers);
      break;
    case 'doc:db':
      console.log(docs.db);
      break;
    case 'doc:models':
      console.log(docs.models);
      break;
    case 'doc:event_handlers':
      console.log(docs.eventHandlers);
      break;
    case 'doc:mock_server':
      console.log(docs.mockServers);
      break;
    case 'doc:server':
      console.log(docs.server);
      break;
    case 'doc:kafka_producer':
      console.log(docs.producer);
      break;
    default:
      this.showHelp();
    }
  }

  process() {
    const mainArg = this.args[0] || '--help';

    if ( mainArg.match(/^--help|-h$/) ) {
      this.showHelp();
    } else if ( mainArg.match(/^--version|-v$/) ) {
      this.showCurrentVersion();
    } else if ( mainArg === 'new' ) {
      this.generateNewProject();
    } else if ( mainArg.substr(0, 4) === 'doc:' ) {
      this.showDoc(mainArg);
    } else {
      this.showHelp();
    }
  }
}

module.exports = Command;
