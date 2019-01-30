import React from 'react';
import { NavLink } from 'react-router-dom';

export default function ToolbarLink({ children, ...rest }) {
	return(
		<NavLink className="" {...rest}>
			{children}
		</NavLink>		
	);
};