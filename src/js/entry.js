import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import promise from "redux-promise";
// For Google Analytics
import 'autotrack';
import '../../analytics.js';
import '../css/entry.css';

import reducers from "./reducers";

/*
  Import Components
*/
import App from './components/App';
import Home from './containers/Home';
import Career from './containers/Career';
import NotFound from './components/NotFound';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
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
