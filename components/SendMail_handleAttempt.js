import React from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock, Button, Col, Row, Grid } from 'react-bootstrap';
import axios from 'axios';

// https://trinitytuts.com/file-uploading-progress-bar-using-axios-php/
// https://github.com/axios/axios
// https://www.taniarascia.com/how-to-upload-files-to-a-server-with-plain-javascript-and-php/
// https://medium.freecodecamp.org/how-to-create-file-upload-with-react-and-node-2aa3f9aab3f0
// https://stackoverflow.com/questions/36634682/file-upload-error-php-and-react
// https://habr.com/post/125424/
// https://stackoverflow.com/questions/36634682/file-upload-error-php-and-react
// https://habr.com/post/125424/

function FieldGroup({ id, label, help, ...props}){
		return(
			<FormGroup controlId={id}>
				<ControlLabel>{label}</ControlLabel>
				<FormControl {...props}/>
				{help && <HelpBlock>{help}</HelpBlock>}
			</FormGroup>
		);
	}

class SendMail extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			selectedFile: null,
			loaded: 0
		};

		this.handleSelectedFile = this.handleSelectedFile.bind(this);
		this.handleUpload = this.handleUpload.bind(this);
	}

	handleSelectedFile(event) {
		// alert('Change started');
		// console.log(event.target.files[0]);
		this.setState({
			selectedFile: event.target.files[0],
			loaded: 0,
		});
	}


	



	handleUpload(event){
		event.preventDefault();
		
		// alert('It starts');

		// console.log(this.state.selectedFile);

		// const data = new FormData();

		// data.append('file', 
		// 	this.state.selectedFile,
		// 	this.state.selectedFile.name
		// );

		// console.log(this.state.selectedFile);

		// data.append('pageFrom', 'text-preparing');

		// data.append('file', 
		// 	this.state.selectedFile
		// 	// this.state.selectedFile.name
		// );

		// console.log(data);
		// alert('data ready');

		// alert('data in console');

		let file = this.refs.file.getDOMNode().files[0];
		
		const reader = new FileReader();
		
		reader.onload = function(output) {
			fileUpload.set({
				file: output.target.result
			});
			fileUpload.save();
		}.bind(this);

		reader.readAsDataURL(file);

		console.log(reader);

		// var req = new XMLHttpRequest();

		// req.open('POST', '/process.php', true);
		// req.onreadystatechange = function() {
  //           if (req.readyState == 4 && req.status == 200) {
  //               alert(req.responseText); // handle response.
  //           }
  //       };

		// req.onload = function(oEvent) {
		// 	if (req.status == 200){
		// 		alert('It\'s ok');
		// 	}else {
		// 		alert('Not good...');
		// 	}
		// }

		// req.send(data);
		// const ans = req.send(data);

		// console.log(ans);



		// axios
		// 	// .post('/upload/server', 
		// 	.post('http://documentprepare.ru/process.php', 
		// 		data, 
		// 		{
		// 			onUploadProgress: ProgressEvent => {
		// 				this.setState({
		// 					loaded: ProgressEvent.loaded/ProgressEvent.total*100,
		// 				})
		// 			}	
		// 		})
		// 	.then(res => {
		// 		console.log(res.statusText);
		// 	})
		// 	.catch(error =>{
		// 		console.log('error here');
		// 		console.log(error);
		// 	})
	}

	render(){
		return(
			<form>
				<input type="file" name="fileInput" ref="file" onChange={this.handleSelectedFile} />
				<button type="submit" onClick={this.handleUpload} value="Upload">Upload</button>
			</form>
		);
	}
};


export default SendMail;




// 
// <form action="process.php" method="post" enctype="multipart/form-data">
// 	<input type="file" name="fileInput" />
// 	<input type="submit" value="Upload"/>
// </form>

// <form onSubmit={this.handleUpload}>
// 				<FieldGroup
// 					id = "formControlsFile"
// 					type = "file"
// 					label = "File"
// 					help = "Help text here."
// 					onChange={this.handleSelectedFile}
// 				/>
// 				<Button type="submit">Submit file</Button>
// 			</form>