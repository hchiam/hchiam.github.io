#!/bin/bash

# to run this file in CLI: bash copy-to-public-folder.sh

# create public folder if it doesn't exist already
if ! [ -e public ]
then
  mkdir public
fi

# empty public folder if it has anything in it:
rm -r public/*

# copy specific files into the public folder:
cp -r phaser-game public
cp htc.png public/htc.png
cp index.html public/index.html
cp minified-code.js public/minified-code.js
cp minified-style.css public/minified-style.css
cp offline-page.html public/offline-page.html
cp service-worker.js public/service-worker.js
cp jquery.min.js public/jquery.min.js
cp jquery-ui.min.js public/jquery-ui.min.js
cp manifest.webmanifest public/manifest.webmanifest
