# [hchiam.com](https://hchiam.com/?can-you-find-all-the-hidden-features?)

![version](https://img.shields.io/github/release/hchiam/hchiam.github.io) [![Build Status](https://travis-ci.org/hchiam/hchiam.github.io.svg?branch=master)](https://travis-ci.org/hchiam/hchiam.github.io) [![Coverage Status](https://coveralls.io/repos/github/hchiam/hchiam.github.io/badge.svg?branch=master)](https://coveralls.io/github/hchiam/hchiam.github.io?branch=master)

## One-time initial local setup:

```bash
yarn # or npm i
```

(Don't have `yarn`? Try [installing `yarn`](https://yarnpkg.com/en/docs/install) and try again. Or [try replacing `yarn` with the `npm` equivalents](https://github.com/hchiam/learning-yarn).)

## Try it locally:

```bash
yarn dev # http://localhost:3000
```

## Deploy to live sites:

```bash
# make sure you're in the main branch before you run this!
git pull
yarn deploy # https://hchiam.surge.sh and https://hchiam.com
```

You need to be in the `main` branch. This command should deploy and update the hchiam.com site. It should push a commit to the `main` branch, and then in the `main` branch run `yarn deploy:gh-pages` to update the `gh-pages` branch, which will deploy the the hchiam.com site.

## Lighthouse test:

```bash
lhci autorun
```

## Suggested starting point to understand the code:

`pages/index.js`
