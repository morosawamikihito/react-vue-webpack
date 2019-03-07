'use strict'

import * as React from 'react'
import { render } from 'react-dom'
import { Home } from './components/Home'
import { Login } from './components/Login'
import { Link, Router, BrowserRouter, HashRouter, Route, Redirect } from 'react-router-dom'

const styles = {
	bgColor: "#efefef",
	height: "100vh"
}

render(
	(
		<HashRouter>
			<div style={{ background: styles.bgColor, height: styles.height }}>
				<Route exact path="/" component={ Home } />
				<Route exact path="/login" component={ Login } />
			</div>
		</HashRouter>
	), 
	document.getElementById('app')
)