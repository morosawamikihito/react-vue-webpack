'use strict'

import * as React from 'react'
import { LoginForm } from './LoginForm'
import { HeadNavbar } from './HeadNavbar'

export class Login extends React.Component {
	render() {
		return (
			<div>
			    <HeadNavbar />
			    <LoginForm />
		    </div>
		)
	}
}



