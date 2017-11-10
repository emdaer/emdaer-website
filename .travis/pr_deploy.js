#!/usr/bin/env node

const deployOnce = require('travis-deploy-once');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

async function deploy() {
  if (!process.env.TRAVIS_PULL_REQUEST) {
    Promise.reject('Skipping PR deploy. Not a PR build.');
  }
  const result = await deployOnce({
    GH_TOKEN: process.env.GH_TOKEN,
  });
  if (result === true) {
    let stdout, stderr;
    try {
      await exec('make build');
      process.chdir('public');
      const out = await exec('../node_modules/.bin/surge-review');
      stdout = out.stdout;
      stderr = out.stderr;
    } catch (e) {
      Promise.reject(e);
    }
    stdout && console.log('stdout:', stdout);
    stderr && console.log('stderr:', stderr);
  } else if (result === false) {
    Promise.reject('Some job(s) failed');
  } else if (result === null) {
    Promise.reject('Did not run as the build leader');
  }
}

try {
  deploy();
} catch (e) {
  console.error(e);
}
