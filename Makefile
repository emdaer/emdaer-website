export FORCE_COLOR = true

precommit: lint-staged
commitmsg: commitlint

upgrade:
	yarn upgrade
build:
	./node_modules/.bin/gatsby build
develop:
	./node_modules/.bin/gatsby develop --verbose
predeploy: build

ci: commitlint-ci lint

emdaer:
	./node_modules/.bin/emdaer
	git add *.md
	git add .emdaer/.offline
lint:
	./node_modules/.bin/eslint .
lint-staged:
	./node_modules/.bin/lint-staged
commitlint:
	./node_modules/.bin/commitlint -e ${GIT_PARAMS}
commitlint-ci:
	./node_modules/.bin/commitlint --from="${TRAVIS_BRANCH}" --to="${TRAVIS_COMMIT}"
	./node_modules/.bin/commitlint --from=${TRAVIS_COMMIT}
	