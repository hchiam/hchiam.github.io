#!/bin/bash

# to run this file in CLI: bash copy-to-public-folder.sh

# empty public folder if it has anything in it:
if [[ -e public/* ]]
then
  rm public/*
fi

# create public folder if it doesn't exist already
if ! [ -e public ]
then
  mkdir public
fi

# copy specific files into the public folder:
cp brain.js public/brain.js
cp htc.png public/htc.png
cp index.html public/index.html
cp minified-code.js public/minified-code.js
cp minified-style.css public/minified-style.css
cp sound.js public/sound.js
cp style.css public/style.css
cp offline-page.html public/offline-page.html
cp service-worker.js public/service-worker.js
cp jquery.min.js public/jquery.min.js
cp jquery-ui.min.js public/jquery-ui.min.js
