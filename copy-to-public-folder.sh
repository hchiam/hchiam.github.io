#!/bin/bash

# empty public folder if it has anything in it:
if [[ -e public/* ]]
then
  rm public/*
fi

# copy specific files into the public folder:
cp brain.js public/brain.js
cp htc.png public/htc.png
cp index.html public/index.html
cp minified-code.js public/minified-code.js
cp minified-style.css public/minified-style.css
cp sound.js public/sound.js
cp style.css public/style.css
