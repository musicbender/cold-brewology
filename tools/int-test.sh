#!/bin/bash

mocha --watch --compilers js:babel-core/register --reporter mochawesome --reporter-options reportDir=test/integration/runner,reportFilename=runner,quiet=true,reportPageTitle='MyProject: Integration Test',reportTitle='MyProject: Integration Test' --require test/setup.js test/integration/**/*.test.js &

browser-sync start --server --port 3018 --ss ./test/integration/runner -f ./test/integration/runner/* --index ./test/integration/runner/runner.html &
