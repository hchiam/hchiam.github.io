# [hchiam.github.io](https://hchiam.github.io)

[![Build Status](https://travis-ci.com/hchiam/hchiam.github.io.svg?branch=master)](https://travis-ci.com/hchiam/hchiam.github.io)

```bash
minify style.css > minified-style.css; minify brain.js sound.js > minified-code.js;
bash copy-to-public-folder.sh
lhci autorun
```

```bash
npm run test # or just: jest
npm run build
npm run start # for testing locally on localhost:3000
```

You can automatically rebuild and restart (instead of typing `npm run start`) every time you edit a file:

```bash
npm run continuous-restart # see package.json for details
```
