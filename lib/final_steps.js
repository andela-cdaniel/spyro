'use strict';

require('colors');
const emoji = require('node-emoji').emoji;
const spyroHeader = require('./spyroHeader');

const finalSteps = function (folder_name) {
  return `
${spyroHeader}

${emoji.star} ${emoji.star} ${emoji.star} ${emoji.star} ${emoji.star} ${emoji.star} ${emoji.star} ${emoji.star}
You have successfully installed the node starter kit that helps you easily get started with building
out micro services for andela internal applications.

${'Next steps'.bold}

Navigate to the newly created directory ${folder_name.blue}

Ensure you change the git remote url to point your actual repository online.
- Use ${'git remote set-url <url-to-git-repo>'.blue}

Install initial dependencies using ${'npm'.underline}
- Use ${'npm install'.blue}

Run ${'spyro help'.blue} to show the help commands available

${emoji.heart}  Happy building ${emoji.heart}
`;
};

module.exports = finalSteps;
