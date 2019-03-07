'use strict'

import * as React from 'react'

export class HeadNavbar extends React.Component {
	render() {
		return (
			<ul className="nav bg-light">
				<li className="nav-item">
					<a className="nav-link" href="/#/">home</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="/#/login">login</a>
				</li>
			</ul>
		)
	}
}
