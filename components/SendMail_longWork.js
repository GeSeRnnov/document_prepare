import React from 'react';
// import { FormGroup, ControlLabel, FormControl, HelpBlock, Button, Col, Row, Grid } from 'react-bootstrap';
import axios from 'axios';
import { FilePond, File, registerPlugin } from 'react-filepond';

import  'filepond/dist/filepond.min.css';

import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

import TextField from '@material-ui/core/TextField';

// npm i filepond-plugin-image-exif-orientation --save
// npm i filepond-plugin-image-preview --save

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

// https://github.com/pqina/filepond/issues/24

// https://trinitytuts.com/file-uploading-progress-bar-using-axios-php/
// https://github.com/axios/axios
// https://www.taniarascia.com/how-to-upload-files-to-a-server-with-plain-javascript-and-php/
// https://medium.freecodecamp.org/how-to-create-file-upload-with-react-and-node-2aa3f9aab3f0
// https://stackoverflow.com/questions/36634682/file-upload-error-php-and-react
// https://habr.com/post/125424/
// https://stackoverflow.com/questions/36634682/file-upload-error-php-and-react
// https://habr.com/post/125424/
// https://github.com/pqina/react-filepond

// const [values, setValues] = React.useState({
// 	name: '',
// 	email: ''
// });

// const handleChange = name => event => {
// 	setValues({...values, [name]: event.target.value});
// }

let pondRef = {};

class SendMail extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			files: [],
			name:'',
			email: '',
			text: ''
		};
		this.handleChangeNm = this.handleChangeNm.bind(this);
		this.handleChangeEml = this.handleChangeEml.bind(this);
		this.handleChangeTxt = this.handleChangeTxt.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}


	handleInit(){
		// console.log('Filepont ready.' , this.pond);
	}


	handleSubmit(event){
		event.preventDefault();
		// console.log(this.state.files);
		// console.log(this.state.files.name);
		// const filenames = this.state.files.map(file => file.name)
		// console.log(filenames);
		// alert('Submit ' + this.state.name + ' ' + this.state.email + ' ' + filenames.join(', ') + ' ' + this.state.text );

		// const pond = FilePond;
		// pond.processFiles().then(files => {
		// console.log('pondRef', pondRef);
		// console.log('this.state.files', this.state.files);
		// console.log('this.state.files[0]', this.state.files[0]);
		
		// alert('before axios');

		// pondRef.processFiles().then(files => {
		    // files have been processed
			// .post('http://documentprepare.ru/api/submit.php', files)
			// console.log('processFiles.files', files);
		 //    axios
			// .get('http://documentprepare.ru/api/submit.php', files)
			// .then(answer => console.log(answer))
			// .catch(error => console.log(error))
		// });

		// const data = new FormData();


		// data.append('filepond', this.state.files);
		// data.append('name', this.state.name);
		// data.append('email', this.state.email);
		// data.append('text', this.state.text);
		// data.append('files', this.state.files);
		// data.append('pageFrom', 'text-prepare');


		// console.log('data', data);
		// axios
		// 	.post('http://documentprepare.ru/api/submit.php', data)
		// 	.then(answer => console.log('answer', answer))
		// 	.catch(error => console.log('error', error));
		// console.log('this.state.files', this.state.files);
		// console.log('this.state.files[0]', this.state.files[0]);
		// console.log('kolbasa');

		let mainObject = {};
		let promices = [];


		this.state.files.map((file, id) => {
			// console.log('file', file);
			// console.log('id', id);
			// data.delete('filepond');
			const data = new FormData();
			data.append('filepond', file);
			// data.append('id', id);

			// console.log('data', data);

			axios
			.post('http://documentprepare.ru/api/submit.php', data, data.name)
			.then(answer => console.log('answer', answer))
			.catch(error => console.log('error', error));

			// promices.push(
			// 	axios.post('http://documentprepare.ru/api/submit.php', data, data.name)
			// )

		})

		// axios
		// 	.all(promices)
		// 	.then(results => results.map(response => {
		// 		mainObject[ response.identifier ] = response.value; 
		// 	}));

		// console.log(mainObject);

	}

	


	handleChangeNm(event){
		this.setState({name: event.target.value});
	}
	handleChangeEml(event){
		this.setState({email: event.target.value});
	}
	handleChangeTxt(event){
		this.setState({text: event.target.value});
	}


	// FilePond.setOptons({
	// 	server: './api'		
	// });
// onSubmit={this.handleSubmit}
	render(){
		return(			
			<form name="submt" onSubmit={this.handleSubmit}>
				<TextField
					id='outlined-name'
					label='ФИО'
					margin='normal'
					onChange={this.handleChangeNm}
					variant='outlined'
				/>
				<TextField
					id='outlined-email-input'
					label='Email'
					type='email'
					name='email'
					autoComplete='email'
					onChange={this.handleChangeEml}
					margin='normal'
					variant='outlined'
				/>
				<FilePond ref={ref => {
						this.pond = ref;
						// this.setState({pondRef: this.pond});
						pondRef = this.pond
						// console.log('pondRef here', pondRef);
					}}
					allowMultiple={true}                       
					server="http://documentprepare.ru/api/"
					oninit={() => this.handleInit() }
					labelIdle = 'Перетащите сюда свои файлы или <span class="filepond--label-action">Выберите их.</span>'
					onupdatefiles={(fileItems) => {
						// Set current file objects to this.state
						this.setState({
						  files: fileItems.map(fileItem => fileItem.file)
						});
						// console.log(this.state.files);
					}}>
                    
                    {/* Update current files  */}
                    {this.state.files.map(file => (
                        <File key={file} src={file} origin="local" />
                    ))
                    // processFiles().then(files => {

                    // })
            		}
                    
                </FilePond>
    			<textarea ref="txtArea" onChange={this.handleChangeTxt}>
    			</textarea>
    			<br/>
				<button type="submit" >press				</button>
			</form>
				
									
		);
	}
};


export default SendMail;


			// <form action="api/submit.php"  method="post" enctype="multipart/form-data">

// <FilePond ref={ref => this.pond = ref}
// 					allowMultiple={true}                       
// 					server="http://documentprepare.ru/api/"
// 					oninit={() => this.handleInit() }
// 					labelIdle = 'Перетащите сюда свои файлы или <span class="filepond--label-action">Выберите их.</span>'
// 					onupdatefiles={(fileItems) => {
// 						// Set current file objects to this.state
// 						this.setState({
// 						  files: fileItems.map(fileItem => fileItem.file)
// 						});
// 						// console.log(this.state.files);
// 					}}>
                    
//                     {/* Update current files  */}
//                     {this.state.files.map(file => (
//                         <File key={file} src={file} origin="local" />
//                     ))
//                     // processFiles().then(files => {

//                     // })
//             		}
                    
//                 </FilePond>

// 
// <form action="./api/submit.php">
// 				<FilePond
// 					ref={ ref => this.pond = ref}
// 					allowMultiple = {true}
// 					name={[]}
// 					server = '/api'
// 					instantUpload={true}
// 					oninit = { () => this.handleInit() }
// 					labelIdle = 'Перетащите сюда свои файлы или <span class="filepond--label-action">Выберите их.</span>'
// 					onupdatefiles = {(fileItems) =>{
// 						this.setState({
// 							files: fileItems.map(fileItem => fileItem.file)
// 						});
// 					}}
// 				>        		
// 				</FilePond>
				
// 				<button type="submit">Отправить</button>
// 			<p>kolbasa</p>
// 			<br/>
// 			<br/>
// 			</form>


// <form action="api/submit.php" method="post" enctype="multipart/form-data">
// 				<input type="file" name="filepond[]" multiple/>
				
// 				<button type="submit">Отправить</button>
// 				<p>kolbasa</p>
// 				<br/>
// 				<br/>
// 			</form>


// <FilePond
// 					ref={ ref => this.pond = ref}
// 					server = "/api"					
// 					allowMultiple = {true}
// 					instantUpload={true}
// 					oninit = { () => this.handleInit() }
// 					labelIdle = 'Перетащите сюда свои файлы или <span class="filepond--label-action">Выберите их.</span>'
// 					onupdatefiles = {(fileItems) =>{
// 						this.setState({
// 							files: fileItems.map(fileItem => fileItem.file)
// 						});
// 					}}
// 				/>



