import React from 'react';
import ReactDOM from "react-dom";
import {browserHistory, IndexRoute, Router, Route} from 'react-router';

//Components
import Restaurants from "./restaurants.jsx";
import Restaurant from './restaurant.jsx';


const App = (props) => {
    return(
      <div>
        {props.children}
      </div>
    )
}

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path='/' component={App}>
		<IndexRoute component={Restaurants}/>
			<Route path='/restaurant/:restId' component={Restaurant} />
		</Route>
	</Router>,
	document.getElementById('root')
);
