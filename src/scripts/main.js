import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import { createHistory } from 'history';

/*
  Import Components
*/
import Index from './components/Index';
import Career from './components/Career';
import NotFound from './components/NotFound';

/*
  Routes
*/
var routes = (
  <Router history={createHistory()}>
    <Route path="/" component={Index} />
    <Route path="/career/:careerName" component={Career} />
    <Route path="*" component={NotFound} />
  </Router> 
)

ReactDOM.render(routes, document.querySelector('#main'));
