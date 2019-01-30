import React from 'react';
// import PropTypes from 'prop-types';
import { Jumbotron, Col, Row, Grid } from 'react-bootstrap';
import SendMail from '../components/SendMail';
import Helmet from 'react-helmet';

export default function TextPreperingPage() {
	return(
		<div>
			<div>
				<Helmet>
					<title>
						Набор текстов
					</title>
					<meta name="description" content="набор и редактирование текстов. Компиляция текстов из разных источников. Онлайн-заявка." />
					<meta name="keywords" content="набор текста аутсорсинг набор текста цена набор текста не дорого срочный набор текста" />
					<base target="http://documentprepare.ru/" />
				</Helmet>
			</div>
			
			<div className="container-fluid container-pages">
				<div justifyContent = "center">				
					<br/>
					<img src='img/carousel-doc-prepare.jpg' alt='набор текста'/>
					<br/>
				</div>				
				<Grid>
					<Row className="row padding">
						<Col lg={12}>
							<br/>
							<br/>
							<Jumbotron>
								<h2 className=" text-center">
									Подготовка документации.
								</h2>
							</Jumbotron>
						</Col>
					</Row>
					
					<Row className="row padding">
						<Col lg={12}>
							<div className="questions">
								<ul>
									<li> Вам часто приходится набирать большие объемы текста и редактировать его?</li>
									<li> Не хватает времени ни на какую другую работу из-за ежедневной кучи документов?</li>
									<li> Нужна помощь в разовом наборе большого объема текста?</li>
									<li> Ломаете голову, где найти персонал для рутинной работы с докуметами?</li>
									<li> Требуется составить простую компиляцию из нескольких источников?</li>
								</ul>
							</div>
						</Col>
					</Row>


					<Row className="row padding">
						<Col lg={12}>
							<h2 className="text-center">Предлагаем наши услуги:</h2>
							<div className="answers">
								<ul>
									<li> <strong>Набор и редактирование текста.</strong>
										<p>
										Вы присылаете нам исходный материал и(или) ссылки на него, а также образец или описание требуемого формата. 
										Мы осуществляем набор и редактирование и возвращаем Вам готовый результат.
										</p>
									</li>
									<li> <strong>Срочный набор текста.</strong>
										<p>
											Ваш заказ будет обрабатываться в более приоритетном порядке.
										</p>
									</li>
									<li> <strong>Компиляция из нескольких источников.</strong>
										<p>
											Вы присылаете нам исходные материалы и(или) ссылки, формат, а также описание того, откуда и что нужно брать и как и где размещать.
											Возможна услуга самостоятельного поиска и формирования контента, при которой Вы обозначаете лишь общие требования к содержимому.
										</p>
									</li>
									<li> <strong>Встраивание функционала в ваш бизнес-процесс. </strong>
										<p>
											Работа осуществляется на постоянной основе. 
											Вы описываете правила, по которым должны обрабатываться те или иные документы, а также то, что требуется сделать с ними в дальнейшем.
											Также переключаете на нас поток документов или описываете откуда их требуется получать.
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
					sentPage={"textprepare"} 
					formText={"Присылайте ваши материалы, заполнив форму или отправляйте их по адресу outsourcing@documentprepare.ru"} 
					haveFilepond={true}  
				/>
			</footer>
		</div>
	);
};

// <div className="container-fluid padding">
// 					<div className="row padding">
// 						<div className="col-lg-6 col-sm-12 text-center">
// 							<p>
// 							колонка 1
// 							</p>
// 						</div>
// 						<div className="col-lg-6 col-sm-12  text-center">
// 							<p>
// 							колонка 2
// 							</p>
// 						</div>
// 					</div>
// 				</div>



