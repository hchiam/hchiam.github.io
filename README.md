# [hchiam.com](https://hchiam.com)

![version](https://img.shields.io/github/release/hchiam/hchiam.github.io)

Generated with [Astro](https://github.com/hchiam/learning-astro).

## One-time initial local setup

```bash
yarn # or npm i
```

(Don't have `yarn`? Try [installing `yarn`](https://yarnpkg.com/en/docs/install) and try again. Or [try replacing `yarn` with the `npm` equivalents](https://github.com/hchiam/learning-yarn).)

## Try it locally

```bash
yarn dev # http://localhost:3000
```

## Deploy to live sites

```bash
# make sure you're in the main branch before you run this!
git pull
yarn deploy # https://hchiam.surge.sh and https://hchiam.com
```

You need to be in the `main` branch. This command should deploy and update the hchiam.com site. It should push a commit to the `main` branch, and then in the `main` branch update the /docs sub-folder for GitHub Pages to use as the root for the hchiam.com site.

## Suggested starting point to understand the code

`/src/pages/index.astro`
