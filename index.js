/**
 * Entry Script
 */

if (process.env.NODE_ENV === 'production') {
  require('./dist/server.bundle.js');
} else {
  require('babel-core/register')({
      presets: ['env', 'react']
  });
  require('./server/server');
}
