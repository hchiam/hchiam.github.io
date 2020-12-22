# [hchiam.github.io](https://hchiam.github.io/?can-you-find-all-the-hidden-features?)

![version](https://img.shields.io/github/release/hchiam/hchiam.github.io) [![Build Status](https://travis-ci.org/hchiam/hchiam.github.io.svg?branch=master)](https://travis-ci.org/hchiam/hchiam.github.io) [![Coverage Status](https://coveralls.io/repos/github/hchiam/hchiam.github.io/badge.svg?branch=master)](https://coveralls.io/github/hchiam/hchiam.github.io?branch=master)

```bash
minify style.css > minified-style.css; minify brain.js sound.js > minified-code.js;
bash copy-to-public-folder.sh
lhci autorun
```

```bash
npm i # to get set up
```

```bash
yarn test # or just: jest
yarn build
yarn start # for testing locally on localhost:8000
yarn stop
```

You can automatically rebuild and restart (instead of typing `yarn run start`) every time you edit a file:

```bash
yarn run continuous-restart # see package.json for details
```

(Don't have `yarn`? [Install `yarn`](https://yarnpkg.com/en/docs/install) and try again. Try replacing `yarn` with `npm` in the commands above.)
