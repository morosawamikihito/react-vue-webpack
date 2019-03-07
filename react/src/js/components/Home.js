'use strict'

import * as React from 'react'
import { Content } from './Content'
import { HeadNavbar } from './HeadNavbar'

export class Home extends React.Component {
	render() {
		return (
			<div>
			    <HeadNavbar />
			    <Content />
		    </div>
		)
	}
}



