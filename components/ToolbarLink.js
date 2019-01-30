import React from 'react';
import { NavLink } from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

export const styles = theme => ({
	root: {
		...theme.typography.subheading,
		paddingLeft: 15,
		paddingRight: 15,
		color: 'black',
		fontSize: '1.5em',
		background: '#03a9f4',
		'&$selected': {},
	},
});

// background: '#f8f8f8',

function ToolbarLink({ children, ...rest }) {

const { classes, name } = { ...rest };


	return(
		<NavLink  {...rest}>
			<MenuItem 
				disableGutters={true}
				component='div'
				className={classNames(
					classes.root,
				)}
				name={name}
			>
				{children}
			</MenuItem>
		</NavLink>		
	);
};

export default withStyles(styles, {name: 'styles' })(ToolbarLink);