import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

/*
  Import Components
*/
import Home from './components/Home';
import Career from './components/Career';
import NotFound from './components/NotFound';

class App extends React.Component {
  render() {
    return (
		<div>
			{this.props.children}
		</div>
    );
  }
}

ReactDOM.render((
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home} />
			<Route path="/career/:careerName" component={Career} />
			<Route path="*" component={NotFound} />
		</Route>
	</Router>
), document.querySelector('#app'));
