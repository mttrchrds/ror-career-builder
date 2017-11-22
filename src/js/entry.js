import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import promise from "redux-promise";
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import '../css/entry.css';

// For Google Analytics
import 'autotrack';
import '../../analytics.js';

import rootReducer from "./reducers";

//  Import Components
import App from './components/App';
import Home from './containers/Home';
import Career from './containers/Career';
import NotFound from './components/NotFound';

// Create store, apply middlewares etc
const store = createStore(
	rootReducer,
	composeWithDevTools(
		applyMiddleware(promise)
	)
);

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<Switch>
				<Route path="/career/:slug" component={Career} />
				<Route path="/career/:slug(/:careerSaved)" component={Career} />
				<Route path="/" component={Home} />
				<Route component={NotFound} />
			</Switch>
		</Router>
	</Provider>, 
	document.querySelector('#app'));
