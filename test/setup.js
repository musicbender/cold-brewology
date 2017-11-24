require('babel-core/register')();

import jsdom from 'jsdom';

// JSDOM will consume this and act as if we were in a browser
const DEFAULT_HTML = '<html><body></body></html>';

global.document = jsdom.jsdom(DEFAULT_HTML);
global.window = document.defaultView;
window.document = document;
global.navigator = window.navigator;
global.location = window.location;
global.$ = require('jquery')(window);

// Prevent Mocha from compiling class
function noop() {
  return null;
}

require.extensions['.css'] = noop;
require.extensions['.scss'] = noop;
