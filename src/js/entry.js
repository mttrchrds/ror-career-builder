import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
// For Google Analytics
import 'autotrack';
import '../../analytics.js';
import '../css/entry.css';

/*
  Import Components
*/
import App from './components/App';
import Home from './components/Home';
import Career from './components/Career';
import NotFound from './components/NotFound';

ReactDOM.render((
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home} />
			<Route path="/career/:careerName" component={Career} />
      <Route path="/career/:careerName(/:careerSaved)" component={Career} />
			<Route path="*" component={NotFound} />
		</Route>
	</Router>
), document.querySelector('#app'));
