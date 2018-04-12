import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage'
import Dashboard from './components/pages/dashboard';
import Details from './components/pages/details';

const Routes = () => 
	<div className="ui container"> 
		<Route path="/" exact component={HomePage}/>
		<Route path="/login" exact component={LoginPage}/>
		<Route path="/dashboard" exact component={Dashboard}/>
		<Route path="/details" exact component={Details}/>
	</div>

export default Routes;
