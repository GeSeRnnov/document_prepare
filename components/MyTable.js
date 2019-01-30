import React from 'react';
// import PropTypes from 'prop-types';
// import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


// const tableData = {
// 	header: [
// 		'Dessert (100g serving)', 
// 		'Calories',
// 		'Fat (g)', 
// 		'Carb (g)', 
// 		'Protein (g)',
// 	],
// 	rows: [
// 		['Frozen yoghurt', 159, 6.0, 24, 4.0],
// 		['Ice cream sandwich', 237, 9.0, 37, 4.3],
// 		['Eclair', 262, 16.0, 24, 6.0],
// 		['Cupcake', 305, 3.7, 67, 4.3],
// 		['Gingerbread', 356, 16.0, 49, 3.9],
// 	]
// }

const CustomTableCell = withStyles(theme => ({
	head: {
		// backgroundColor: theme.palette.common.black,
		backgroundColor: '#81d4fa' ,
		color: theme.palette.common.white,
		fontSize: 14,
	},
	body: {
		fontSize: 14,
	},
}))(TableCell)


const styles = theme => ({
	root: {
		width: '100%',
		overflowX: 'auto',
	},
	table: {
		minWidth: 500,
	},
	row: {
		'&:nth-of-type(odd)': {
			// backgroundColor: theme.palette.background.default,
			backgroundColor: '#f3fbff',
		},
	},
})

// let id = 0;
// function createData(name, calories, fat, carbs, protein) {
//   id += 1;
//   return { id, name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

function MyTable(props) {
	const { classes, tableData } = props;
	// let id = 0;

	// function createData(name, calories, fat, carbs, protein) {
	// 	id += 1;
	// 	return { id, name, calories, fat, carbs, protein };
	// }

	// const rows = [
	// 	createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
	// 	createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
	// 	createData('Eclair', 262, 16.0, 24, 6.0),
	// 	createData('Cupcake', 305, 3.7, 67, 4.3),
	// 	createData('Gingerbread', 356, 16.0, 49, 3.9),
	// ];
	
	return(		
		<Paper className={classes.root}>
			<Table className={classes.table}>
				<TableHead>
					<TableRow>
						{tableData.header.map((cellValue, idValue) => 
							<CustomTableCell
								align={ idValue === 0 ? "left" : "right" }
							>
								{cellValue}
							</CustomTableCell>
						)}
					</TableRow>
				</TableHead>
				<TableBody>
					{tableData.rows.map((row, id) =>
						<TableRow className={classes.row}  key={id}>
								{row.map((cellValue, idValue) =>
									<CustomTableCell 
										component={ idValue === 0 ? "th" : "td" } 
										scope={ idValue === 0 ? "row" : "" }
										align={ idValue === 0 ? "left" : "right" }
									>
										{cellValue}
									</CustomTableCell>
								)}
						</TableRow>
					)}
				</TableBody>
			</Table>
		</Paper>
	);	
};

export default withStyles(styles)(MyTable);
