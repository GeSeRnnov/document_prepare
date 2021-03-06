import React from 'react';
// import { FormGroup, ControlLabel, FormControl, HelpBlock, Button, Col, Row, Grid } from 'react-bootstrap';
import axios from 'axios';
import { FilePond, File } from 'react-filepond';
// , registerPlugin
import  'filepond/dist/filepond.min.css';

// import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
// import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';
// import { createMuiTheme } from "@material-ui/core/styles";
// import { ThemeProvider } from "@material-ui/styles";

import { FormGroup, ControlLabel, FormControl, Button, Col, Row, Grid } from 'react-bootstrap';

// npm i filepond-plugin-image-exif-orientation --save
// npm i filepond-plugin-image-preview --save

// Register the plugins
// registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

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
		this.sendMail = this.sendMail.bind(this);
	}


	handleInit(){
		// console.log('Filepont ready.' , this.pond);
	}


	handleSubmit(event){
		event.preventDefault();

		let fileList = '';
		let answers = [];
		let pondFileList = this.pond.getFiles();
		let fListArr = [];
		let filesSubmitted = false;

		
		
		if(this.state.files.length > 0){
			this.state.files.map((file, id) => {
				const data = new FormData();
				data.append('filepond', file);
				fileList += file.name.trim() + ';';
				
				axios
					.post('http://documentprepare.ru/api/submit.php', data, data.name)
					.then(answer => {
						answers.push(answer.data);
						fListArr = fileList.split(';');
						if ( (fListArr.length - 1) === answers.length ){
							// console.log('match', fileList, id);						
							this.sendMail(fileList);
							// filesSubmitted = true;
						}
					})
					.then(answer => {
						this.pond.processFiles();
						this.pond.removeFiles();
					})
					.catch(error => console.log('AxsSbmt->error', error));
			})		
			// console.log('have files, mail sent');
		} else {
			this.sendMail('');
			// console.log('no files, mail sent');
		}

		// this.pond.removeFiles();			

	}

	sendMail(fList){
		// console.log(this.props.sentPage);
		let docPages = ['textprepare', 'copywriting'];
		let sentPage = this.props.sentPage;
		let recipient = docPages.indexOf(sentPage) != -1 ? 'rukominau@mail.ru' : 'villian_2007@mail.ru' ;
		const data = new FormData();
		data.append('to', recipient);
		data.append('subject', 'ВНИМАНИЕ! Получен заказ с сайта documentprepare.ru');
		data.append('message', 'Имя:' + this.state.name + '\n' + 
								'Email:' + this.state.email + '\n' + 
								'Сообщение:' + this.state.text + '\n' + 
								'Отправленные файлы:' + fList);
		data.append('sentPage', sentPage);
		data.append('filesToAttach', fList);

		console.log('to', recipient);
		console.log('sentPage', sentPage);
		console.log('filesToAttach', fList);

		return axios	
			.post('http://documentprepare.ru/api/sendMail.php', data)
			.catch(error => console.log('SndMl->error', error));

		
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
						<Col lg={4}>
							<br/>
							<Button variant="contained" type="submit" >Отправить</Button>
							<br/>
							<br/>
							<br/>
							<FormGroup>
								<FormControl.Static>
									{this.props.formText}
									<br/>
									<br/>
									<div className="dataProcAgrmnt">
										Отпавляя сообщение, Вы даете согласие на обработку указанных вами данных.
									</div>
								</FormControl.Static>
							</FormGroup>
						</Col>
					
						<Col lg={8} >
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
									//
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


