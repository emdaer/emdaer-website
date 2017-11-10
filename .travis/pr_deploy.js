#!/usr/bin/env node

const deployOnce = require('travis-deploy-once');
const util = require('util');
const execFile = util.promisify(require('child_process').execFile);

async function deploy() {
  const result = await deployOnce({
    GH_TOKEN: process.env.GH_TOKEN,
  });
  if (result === true) {
    const { stdout } = await execFile('make', ['deploy-ci']);
    console.log(stdout);
  } else if (result === false) {
    console.log('Some job(s) failed');
  } else if (result === null) {
    console.log('Did not run as the build leader');
  }
}

try {
  deploy();
} catch (e) {
  console.error(e);
}
