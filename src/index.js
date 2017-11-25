import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import reducers from './reducers';
import App from './containers/app';
import './style/base.scss';

const preloadedState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;

const store = createStore(reducers, preloadedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const Index = () => (
	<Provider store={store}>
		<BrowserRouter basename="/">
	    <App />
		</BrowserRouter>
	</Provider>
)

render(<Index />, document.getElementById('app'));
