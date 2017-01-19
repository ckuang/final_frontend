import {withRouter, Router, Route, Link, browserHistory} from 'react-router';
import ReactDOM from 'react-dom';
import React from 'react';
import Restaurants from './restaurants';
import Restaurant from './restaurant';

ReactDOM.render(  
	<Router history={browserHistory}>
    <Route path='/' component={Restaurants} />
    <Route path='/restaurant/:id' component={Restaurant} />
  </Router>, 
  document.getElementById('root')
)