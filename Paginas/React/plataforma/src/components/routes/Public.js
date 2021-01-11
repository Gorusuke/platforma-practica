import React from 'react'
import { Redirect, Route } from 'react-router-dom'

export const Public = ({component: Component, ...props}) => {
	
	const usuario = false;
	
	return (
		<Route {...props} render={ props => usuario 
			? (<Redirect to='/' />)
			: (<Component {...props} />)
		} />
	)
}
