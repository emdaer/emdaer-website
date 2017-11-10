#!/usr/bin/env node

const deployOnce = require('travis-deploy-once');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

async function deploy() {
  const result = await deployOnce({
    GH_TOKEN: process.env.GH_TOKEN,
  });
  if (result === true) {
    let stdout, stderr;
    try {
      const out = await exec('make deploy-pr');
      stdout = out.stdout;
      stderr = out.stderr;
    } catch (e) {
      console.log('error:', e);
    }
    console.log('stdout:', stdout);
    console.log('stderr:', stderr);
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
