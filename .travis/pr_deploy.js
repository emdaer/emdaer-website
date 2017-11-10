#!/usr/bin/env node

const deployOnce = require('travis-deploy-once');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

async function deploy() {
  if (!process.env.TRAVIS_PULL_REQUEST) {
    return Promise.reject('Skipping PR deploy. Not a PR build.');
  }
  const { stdout: gitDiff } = await exec(
    'git diff --name-only $TRAVIS_COMMIT_RANGE src yarn.lock package.json gatsby-config.js'
  );
  if (gitDiff.length === 0) {
    return Promise.reject(
      'Skipping PR deploy. No changes made to website source'
    );
  }
  const result = await deployOnce({
    GH_TOKEN: process.env.GH_TOKEN,
  });
  if (result === true) {
    let stdout, stderr;
    try {
      await exec('make build');
      process.chdir('public');
      await exec('../node_modules/.bin/surge-review');
    } catch (e) {
      return Promise.reject(e);
    }
    return Promise.resolve('Successfully deployed PR site');
  } else if (result === false) {
    return Promise.reject('Some job(s) failed');
  } else if (result === null) {
    return Promise.reject('Did not run as the build leader');
  }
}

module.exports = deploy;

(async () => {
  try {
    await module.exports();
  } catch (e) {
    console.error(e);
  }
})();
