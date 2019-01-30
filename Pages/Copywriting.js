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
					Копирайтинг
				</title>
				<meta name="description" content="Рерайтинг статей, копирайтинг, seo-копирайтинг. Онлайн-заявка." />
				<meta name="keywords" content="рерайтинг копирайтинг seo-копирайтинг онлайн-заявка срочный копирайтинг" />
				<base target="http://documentprepare.ru/" />
			</Helmet>

						

			<div className="container-fluid container-pages">				
				<div justifyContent = "center">				
					<br/>
					<img src='img/Copywriting.jpg' alt='копирайтинГ' />
					<br/>
				</div>	
				<Grid>
					<Row className="row padding">
						<Col lg={12}>
							
							<br/>
							<br/>
							<Jumbotron>
								<h2 className=" text-center">
									Копирайтинг.
								</h2>
							</Jumbotron>
						</Col >
					</Row>

					<Row className="row padding">
						<Col lg={12}>
							<div className="questions">
								<ul>
									<li> Нужна статья, аналогичная уже имеющейся, но уникальная на предмет антиплагиата?</li>
									<li> Требуется абсолютно новая статья по вашей тематике?</li>
									<li> Хотите, чтобы ваши тексты были "продающими" и "привлекающими" клиентов?</li>
									<li> От Вас требуют немедленный результат копирайтинга, но требуемый объем слишком велик для Вас?</li>
									<li> У Вас не хватает времени на копирайтинг?</li>
								</ul>
							</div>
						</Col>
					</Row>


					<Row className="row padding">
						<Col lg={12}>
							<h2 className="text-center">Предлагаем наши услуги:</h2>
							<div className="answers">
								<ul>
									<li> <strong>Простой копирайтинг (рерайтинг).</strong>
										<p>
											На основе присланных Вами статей (или ссылок на них) делается уникальная, в плане антиплагиата статья.
											Гаранированный процент уникальности - не ниже 70%.
											Количество знаков не ниже среднего из предоставленных статей.
										</p>
									</li>
									<li> <strong>Написание новой статьи (копирайтинг).</strong>
										<p>
											Вы задаете тематику статьи, указываете какие стороы должны быть обязательно освещены, а также источники (если они есть) и различные нюансы (SEO и пр.).
											Мы самостоятельно изучаем тему, ищем статьи со схожими тематиками и пишем статью с учетом ваших требований.
											Уникальность и количество знаков оговариваются заранее.
										</p>
									</li>
									<li> <strong>Срочный копирайтинг.</strong>
										<p>
											Ваш заказ будет обрабатываться в более приоритетном порядке.
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
					sentPage={"copywriting"} 
					formText={"Присылайте ваши материалы, заполнив форму или отправляйте их по адресу outsourcing@documentprepare.ru"} 
					haveFilepond={true}  
				/>
			</footer>
		</div>
	);
};


// <Helmet
// 				title="Копирайтинг" 
// 				meta={[
// 					{	"name": "description",
// 						"content": "Рерайтинг статей, копирайтинг, seo-копирайтинг. Онлайн-заявка."
// 					},
// 					{	"name": "keywords",
// 						"content": "рерайтинг копирайтинг seo-копирайтинг онлайн-заявка срочный копирайтинг"
// 					}
// 				]}
// 				base={{"href": "http://documentprepare.ru/"}}
// 			/>

