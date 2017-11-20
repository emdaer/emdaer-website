# <!--emdaer-p
  - '@emdaer/plugin-value-from-package'
  - value: name
--> · <!--emdaer-p
  - '@emdaer/plugin-shields'
  - shields:
      - alt: 'Travis'
        image: 'travis/emdaer/emdaer.svg'
        link: 'https://travis-ci.org/emdaer/emdaer.github.io/'
        style: 'flat-square'
      - alt: 'Documented with emdaer'
        image: 'badge/📓-documented%20with%20emdaer-F06632.svg'
        link: 'https://github.com/emdaer/emdaer'
        style: 'flat-square'
-->
<!--emdaer-p
  - '@emdaer/plugin-value-from-package'
  - value: description
-->
## Table of contents
<!-- toc -->
## Deployments

### Website
Travis autodeploys the website to GitHub Pages using its `deploy` configuration when changes are merged into the `site` branch. Being an [Organization Page](https://help.github.com/articles/user-organization-and-project-pages/), the website code is stored on the `master` branch.

### Pull Requests
Pull Request builds will run [surge-review](https://github.com/cdaringe/surge-review) via Travis' `after_success`  hook on the highest node version build using [travis-deploy-once](https://github.com/semantic-release/travis-deploy-once). Once the deployment is sucessful, a comment from emdaerbot will be posted to the respective PR with a link to the built site. This can be used for design review and functional testing of Pull Requests. Each additional commit to the website source in the PR will rebuild the site and post a new link.

## Content
Some of the content on this website is shared from the [emdaer](https://github.com/emdaer/emdaer) readme via the [@emdaer/meta](https://www.npmjs.com/package/@emdaer/meta) package which exports the readme sections as template literals. 

## Contributors
<!--emdaer-p
  - '@emdaer/plugin-contributors-details-github'
-->

## License
<!--emdaer-p
  - '@emdaer/plugin-license-reference'
-->
<!--emdaer-t
  - '@emdaer/transform-prettier'
  - options:
      printWidth: 500
      singleQuote: true
      trailingComma: es5
-->
<!--emdaer-t
  - '@emdaer/transform-smartypants'
  - options: q
-->
<!--emdaer-t
  - '@emdaer/transform-table-of-contents'
-->
