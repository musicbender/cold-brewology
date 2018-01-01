#!/bin/bash

mocha \
  --watch \
  --compilers js:babel-core/register \
  --reporter mochawesome \
  --reporter-options \
      reportDir=test/runner, \
      reportFilename=runner, \
      quiet=true,\
      reportPageTitle='MyProject: Unit Test', \
      reportTitle='MyProject: Unit Test'\
  --require test/setup.js \
  $(find src test -name '*.test.js' -not -path 'test/integration/*' -not -path 'node_modules/*'  -not -path 'src/_news/*') \
&

browser-sync \
  start \
  --server\
  --port 3011 \
  --ss ./test/runner \
  -f ./test/runner/* \
  --index ./test/runner/runner.html \
&
