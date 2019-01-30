import React from 'react';
// import { FormGroup, ControlLabel, FormControl, HelpBlock, Button, Col, Row, Grid } from 'react-bootstrap';
import axios from 'axios';
import { FilePond, File, registerPlugin } from 'react-filepond';

import  'filepond/dist/filepond.min.css';

import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';
// import { createMuiTheme } from "@material-ui/core/styles";
// import { ThemeProvider } from "@material-ui/styles";

import { FormGroup, ControlLabel, FormControl, Button, Col, Row, Grid } from 'react-bootstrap';

// npm i filepond-plugin-image-exif-orientation --save
// npm i filepond-plugin-image-preview --save

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

// const theme = createMuiTheme({ typography: { useNextVariants: true } });

function FieldGroup({ id, label, ...props}) {
	return(
		<FormGroup controlId={id}>
			<ControlLabel>{label}</ControlLabel>
			<FormControl {...props}/>
		</FormGroup>
	);
}

// 

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

		// console.log(pondRef);
		let fileList = '';
		let answers = [];
		// pondRef.removeFiles();

		// this.state.files.map((file, id) => {
		
		// 	const data = new FormData();
		// 	data.append('filepond', file);
		// 	fileList += file.name.trim() + ';';
			
		// 	axios
		// 		.post('http://documentprepare.ru/api/submit.php', data, data.name)
		// 		.then(answer => {
		// 			answers.push(answer.data);
		// 			// console.log('answer sbmt:', answer)
		// 		})
		// 		.catch(error => console.log('error', error));

		// })

		// console.log('answers', answers);

		// console.log('SndMl-> filelist:', fileList);
		console.log('pondRef:', pondRef);
		let pondFileList = pondRef.getFiles();
		console.log('pondFileList', pondFileList);
		pondRef.processFiles().then(files => {
			console.log('SndMl->files', files);
		});	
		pondRef.removeFiles();			

		const data = new FormData();
		data.append('to', 'villian_2007@mail.ru');
		data.append('subject', 'PHP test');
		data.append('message', 'Hi, this message created automatically. Do not answer this message.');
		data.append('filesToAttach', fileList);

		axios	
			.post('http://documentprepare.ru/api/sendMail.php', data)
			.then(answer => console.log('answer sendMail:', answer))
			.catch(error => console.log('error', error));
		

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



	render(){
		return(			

			<form name="submt" onSubmit={this.handleSubmit}>
				<Grid className="sendForm">
					<Row className="show-grid">
						<Col lg={3}>
							<br/>
							<Button variant="contained" type="submit" >Отправить</Button>
							<br/>
							<br/>
							<br/>
							<FormGroup>
								<FormControl.Static>
									Присылайте ваши материалы, заполнив форму или отправляйте их по адресу ...
									<br/>
									<div className="dataProcAgrmnt">
										Присылая нам данные, Вы даете согласие на обработку своих персональных данных.
									</div>
								</FormControl.Static>
							</FormGroup>
						</Col>
					
						<Col lg={9} >
							<FieldGroup
								id="formControlText"
								type="text"
								label="ФИО"
								placeholder="Введите ФИО"
								onChange={this.handleChangeNm}
							/>
							<FieldGroup
								id="formControlEmail"
								type="email"
								label="Email"
								placeholder="Введите Email"
								onChange={this.handleChangeEml}
							/>
							
			    			<FormGroup controlId="formControlTextArea">								
								
								<ControlLabel>Сообщение</ControlLabel>
								<FormControl onChange={this.handleChangeTxt} componentClass="textarea" placeholder="Введите текст сообщения." />
								
							</FormGroup>
						
				    		<FilePond ref={ref => {
									this.pond = ref;
									pondRef = ref;
									console.log('this.pond getfiles:', this.pond.getFiles());
								}}
								allowMultiple={true}                       
								server="http://documentprepare.ru/api/"
								oninit={() => this.handleInit() }
								labelIdle = 'Перетащите сюда свои файлы/папки или <span class="filepond--label-action">Выберите их.</span>'

								onupdatefiles={(fileItems) => {
									// Set current file objects to this.state
									this.setState({
									  files: fileItems.map(fileItem => fileItem.file)
									});
									console.log('updtFl->fileItms', fileItems);
									fileItems.map(fileItem => console.log('updtFl->fileItms.file', fileItem.file));
								}}
							>		  

			                    {/* Update current files  */}
			                    {this.state.files.map(file => 
			                    	(
			                        <File key={file} src={file} origin="local" />
			                    ))}
			                </FilePond>	
						</Col>
					</Row>	
				</Grid>
				<br/>	
			</form>
		);
	}
};


export default SendMail;


