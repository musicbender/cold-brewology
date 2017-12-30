import React from 'react';
import { hydrate } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import promise from 'redux-promise';
import reducers from './reducers';
import App from './containers/app';
import './style/main.scss';

if (typeof window === undefined) {
	global.window = {};
	global.location = {};
	global.document = {};
}

const preloadedState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;

let middleware = [promise];
let store;

if (process.env.NODE_ENV === "development" && window.__REDUX_DEVTOOLS_EXTENSION__) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const enhancer = composeEnhancers(applyMiddleware(...middleware));
  store = createStore(reducers, preloadedState, enhancer);
} else {
	store = createStore(
		reducers,
		preloadedState,
		applyMiddleware(...middleware)
	);
}

const Index = () => (
	<Provider store={store}>
		<BrowserRouter basename="/">
	    <App />
		</BrowserRouter>
	</Provider>
)

hydrate(<Index />, document.getElementById('app'));
