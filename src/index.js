import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import reducers from './reducers';
import App from './containers/app'; 
import './style/base.scss';

const preloadedState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;

const middleware = [thunk];

if (process.env.NODE_ENV === "development") {
	let reduxDev = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
	middleware = [...middleware, reduxDev];
}

const store = createStore(
	reducers,
	preloadedState,
	appleMiddleware(middleware)
);

const Index = () => (
	<Provider store={store}>
		<BrowserRouter basename="/">
	    <App />
		</BrowserRouter>
	</Provider>
)

render(<Index />, document.getElementById('app'));
