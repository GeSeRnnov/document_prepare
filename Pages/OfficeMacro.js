import React from 'react';
// import PropTypes from 'prop-types';
import { Jumbotron, Col, Row, Grid } from 'react-bootstrap';
import SendMail from '../components/SendMail';
import Helmet from 'react-helmet';


export default function TextPreperingPage() {
	return(
		<div>
			<Helmet>
				<title>
					Офисная автоматизация
				</title>
				<meta name="description" content="Макросы MS Office, создание АС на заказ, автоматизация офисной аналитики. Онлайн-заявка." />
				<meta name="keywords" content="Excel макросы Word макросы Access макросы Outlook макросы эксель макросы недорого цена парсинг сайтов Olap кубы Olap кубы не дорого" />
				<base target="http://documentprepare.ru/" />
			</Helmet>

			<div className="container-fluid container-pages">
				<div justifyContent = "center">				
					<br/>
					<img src='img/OfficeMacro.jpg' alt='офисная автоматизация' />
					<br/>
				</div>				
				<Grid>
					
					<Row className="row padding">
						<Col lg={12}>
							
							<br/>
							<br/>
							<Jumbotron>
								<h2 className=" text-center">
									Офисная автоматизация.
								</h2>
							</Jumbotron>
						</Col>
					</Row>

					<Row className="row padding">
						<Col lg={12}>
							<div className="questions">
								<ul>
									<li> Часто делаете однотипные действия в офисе и хотите их автоматизировать?</li>
									<li> Вам не хватает стандартного функционала в MS Office?</li>
									<li> Нужен кто-то, кто может разово оказать техническую поддержку вашему проекту?</li>
									<li> Хотите свою автоматизированную систему на базе MS Office?</li>
									<li> У вас есть автоматизированная система но ей сложно пользоваться в MS Office?</li>
									<li> Хотели бы все это исправить, но не знаете как или нет времени?</li>
								</ul>
							</div>
						</Col>
					</Row>


					<Row className="row padding">
						<Col lg={12}>
							<h2 className="text-center">Предлагаем наши услуги:</h2>
							<div className="answers">
								<ul>
									<li> <strong>Автоматизация MS Office.</strong>
										<p>
											Макросы в Excel, Word и Otlook.
											Начиная с создания собственных формул и заканчивая построением сложных отчетов по расписанию с выводом результатов в заданном формате.
											Вы присылаете обазцы того, что требуется получить и описание ваших алгоритмов. 
										</p>
									</li>
									<li> <strong>Подключение MS Office к сторонним АС.</strong>
										<p>
											Создание удобных для пользователя MS Office интерфейсов для подключения к нужным вам АС. 
											Извлечение и загрузка данных, запуск расчетов и многое другое.
											Потребуется описание данных АС, а также наличие у Вас прав доступа к внутренним БД и к запуску требуемых процедур.
										</p>
									</li>
									<li> <strong>Создание офисных приложений под ваши нужды.</strong>
										<p>
											Сбор данных из разрозненных источников (офисные файлы, БД, интернет ресурсы), их систематизация и хранение.
											Обработка данных, произведение расчетов по заданным алгоритмам и вывод полученного результата.
											Требуется детальное ТЗ с описанием процесса, а также наличие у Вас доступа к требуемым источникам.
										</p>
									</li>
								</ul>
							</div>
						</Col>
					</Row>

				</Grid>
			</div>
			<br/>
			<br/>
			<footer>
				<SendMail  
					sentPage={"officemacro"} 
					formText={"Присылайте ваши материалы, заполнив форму или отправляйте их по адресу outsourcing@documentprepare.ru"} 
					haveFilepond={true}  
				/>
			</footer>
</div>
	);
};


