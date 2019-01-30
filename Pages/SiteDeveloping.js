import React from 'react';
// import PropTypes from 'prop-types';
import { Jumbotron, Col, Row, Grid } from 'react-bootstrap';
import SendMail from '../components/SendMail';
import Helmet from 'react-helmet';


export default function SiteDevelopingPage() {
	return(
		<div>
			<Helmet>
				<title>
					Создание сайтов
				</title>
				<meta name="description" content="Сайты-визитки, полнофункциональные сайты, добавление функционала в имеющиеся сайты. Онлайн-заявка." />
				<meta name="keywords" content="Сайт-визитка полнофункциональный сайт добавление функционала в имеющиеся сайты исправить сайт онлайн-заявка" />
				<base target="http://documentprepare.ru/" />
			</Helmet>
			<div className="container-fluid container-pages">
					
				<div justifyContent = "center">				
					<br/>
					<img src='img/SiteCreating.jpg'  alt='создание сайтов' />
					<br/>
				</div>				
					
				<Grid>
					<Row className="row padding">
						<Col lg={12}>
							<br/>
							<br/>	
							<Jumbotron>
								<h2 className=" text-center">
									Разработка сайтов.
								</h2>
							</Jumbotron>
						</Col>
					</Row>
					<Row className="row padding">
						<Col lg={12}>
							<div className="questions">
								<ul>
									<li> Ваш бизнес до сих пор не имеет своего сайта?</li>
									<li> Хотите изменить уже имеющийся сайт?</li>
									<li> Вашему бизнесу требуется современный сайт со сложной логикой?</li>
									<li> Существующие на рынке решения не удовлетворяют Вас или требуют больших затрат?</li>
								</ul>
							</div>
						</Col>
					</Row>


					<Row className="row padding">
						<Col lg={12}>
							<h2 className="text-center">Предлагаем наши услуги:</h2>
							<div className="answers">
								<ul>
									<li> <strong>Создание простого сайта.</strong>
										<p>
											Разработка сайтов-визитных карточек. 
											Вы присылаете контент и макет сайта, по которому мы делаем разработку.
											Возможен самостоятельный поиск контента и разработка макета сайта.
										</p>
									</li>
									<li> <strong>Изменение имеющегося сайта.</strong>
										<p>
											Требуется описание изменений, исходный код сайта или доступ на его редактирование.
											Возможность реализации заказа зависимости от используемой сайтом технологии и требуемых изменений.
										</p>
									</li>
									<li> <strong>Разработка полноценного сайта.</strong>
										<p>
											Мы разработаем для Вас современный сайт используя передовые технологии сайтостроения. 
											Вы получаете согласованную с Вами разработку макета и алгоритма работы сайта, ежедневный отчет о проделанной работе и текущий статус.
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
					sentPage={"sitedeveloping"} 
					formText={"Присылайте ваши материалы, заполнив форму или отправляйте их по адресу outsourcing@documentprepare.ru"} 
					haveFilepond={true}  
				/>
			</footer>
		</div>
	);
};

