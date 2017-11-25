import express from 'express';
import http from 'http';
import https from 'https';
import fs from 'fs';
import path from 'path';
import bodyParser from 'body-parser';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';
import App from '../src/containers/app';
import reducers from '../src/reducers';
import config from './config';
const criticalCSS = require('./views/critical.css').toString();
require('babel-core/register')({
    presets: ['env', 'react']
});

console.log(process.env.ONSERVER);
const app = new express();
const viewDir = process.env.LIVE ? 'dist/views' : 'server/views';

app.set('view engine', 'pug');
app.set('views', viewDir);

app.use(express.static(path.join(__dirname, 'public/')));
app.use(bodyParser.json());

app.get('*', (req, res) => {
  const store = createStore(reducers);
  const context = {};
  const html = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    </Provider>
  );

  if (context.url) {
    res.redirect(301, context.url);
    res.end()
  }

  const preloadedState = store.getState();
  res
    .set('Content-Type', 'text/html')
    .status(200)
    .render('index', {
      html,
      preloadedState,
      criticalCSS,
      onServer: process.env.ONSERVER
    });
});

if (!process.env.LIVE) {
  const options = {
      key: fs.readFileSync(config.DEV_KEY),
      cert: fs.readFileSync(config.DEV_CERT),
      requestCert: false,
      rejectUnauthorized: false
  };

  https.createServer(options, app).listen(config.DEV_PORT, () => {
    console.log(`Cold Brewology local server started at port ${config.DEV_PORT}`);
  });
  http.createServer(app).listen(config.DEV_HTTP_PORT, () => {
    console.log(`app at local server at port ${config.DEV_HTTP_PORT}`);
  })
} else {
  app.listen(config.LIVE_PORT, err => {
    if (err) { console.error(err); }
    console.log(`Cold Brewology now live at ${config.LIVE_PORT}!`);
  });
}
