#!/bin/bash
set -e

if [ "$TRAVIS_PULL_REQUEST" != "false" ]; then
  echo "We are in a pull request, not deploying"
  exit 0
fi

if [[ $TRAVIS_BRANCH != 'site' ]]; then
  echo "Builds from a branch are not deployed"
  exit 0
fi

if [[ $TRAVIS_BRANCH == 'site' ]]; then
  rm -rf .git
  git init
  git clean -dfx
  git remote add origin https://github.com/$TRAVIS_REPO_SLUG.git
  git fetch origin
  git clone https://github.com/$TRAVIS_REPO_SLUG.git $TRAVIS_REPO_SLUG
  git checkout $TRAVIS_BRANCH

  git config credential.helper store
  echo "https://${DEPLOY_GH_USERNAME}:${DEPLOY_GH_TOKEN}@github.com/${TRAVIS_REPO_SLUG}.git" > ~/.git-credentials

  git config --global user.email "${DEPLOY_GH_EMAIL}"
  git config --global user.name "${DEPLOY_GH_USERNAME}"
  git config --global push.default simple

  git fetch --tags
  git branch -u origin/$TRAVIS_BRANCH
  git fsck --full #debug
  echo "git config --list"
  git config --list #debug

  yarn deploy
fi
