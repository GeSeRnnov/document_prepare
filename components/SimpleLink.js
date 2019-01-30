import React from 'react';
import { NavLink } from 'react-router-dom';


export default function SimpleLink({ children, ...rest }) {

const { classes, name } = { ...rest };


	return(
		<NavLink  {...rest}>
			{children}
		</NavLink>		
	);
};

