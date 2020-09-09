import { h } from 'preact';
import { Router } from 'preact-router';

import Header from './header';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Nautical from '../routes/nautical'

const App = () => (
	<div id="app">
		<Header />
		<Router>
			<Home path="/" />
      <Nautical path="/nautical"/>
		</Router>
	</div>
)

export default App;
