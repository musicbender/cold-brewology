import express from 'express';
import http from 'http';
import https from 'https';
import fs from 'fs';
import path from 'path';
import bodyParser from 'body-parser';
import React from 'react';
import mongoose from 'mongoose';
import { renderToString } from 'react-dom/server';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';
import App from '../src/containers/app';
import reducers from '../src/reducers';
import config from './config';
import api from './api';
import criticalCSS from './views/critical.css';

// webpack
import webpack from 'webpack';
import wpConfig from '../webpack.dev.config';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

// initialization
const app = new express();
const viewDir = process.env.LIVE ? 'dist/views' : 'server/views';
const PORT = process.env.LIVE ? config.LIVE_PORT : config.DEV_PORT;

app.set('view engine', 'pug');
app.set('views', viewDir);

// connect to database and start server
mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://${config.DB_HOST}:${config.DB_PORT}/cold-brewology`, {
  useMongoClient: true,
});
const db = mongoose.connection;

db.on('error', (err) => {
  console.error(err);
})

db.once('open', () => {
  console.log('mongo connected...');
  app.listen(PORT, err => {
    if (err) { console.error(err); }
    console.log(`Cold Brewology now live at ${PORT}!`);
  });
})

// Run Webpack dev server in development mode
if (process.env.NODE_ENV === 'development') {
  const compiler = webpack(wpConfig);
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: wpConfig.output.publicPath,
    stats: {colors: true}
  }));
  app.use(webpackHotMiddleware(compiler, {
    log: console.log
  }));
}

// Middlewares
app.use(express.static(path.join(__dirname, 'public/')));
app.use(bodyParser.json());

// API routes
app.use('/api', api);

// server side rendering
app.use((req, res) => {
  console.log('server side rendering...');
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
    });
});
