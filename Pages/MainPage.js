import React from 'react';
// import PropTypes from 'prop-types';
import { Jumbotron, Col, Row, Grid } from 'react-bootstrap';
import MyCarousel from '../components/Carousel';
import SendMail from '../components/SendMail';
import Helmet from 'react-helmet';


const carouselProps = {items: [
	{	id: 1,
		img: 'img/carousel-doc-prepare.jpg',
		alt: 'Подготовка документов',
		txt: 'Работа с текстовыми документами',
		to: '/text-preparing'
	},
	{	id: 2,
		img: 'img/Copywriting.jpg',
		alt: 'Копирайтинг',
		txt: 'Копирайтинг',
		to: '/copywriting'
	},
	{	id: 3,
		img: 'img/OfficeMacro.jpg',
		alt: 'Офисные макросы',
		txt: 'Офисные макросы',
		to: '/office-macro'
	},
	{	id: 4,
		img: 'img/SiteCreating.jpg',
		alt: 'Создание сайтов',
		txt: 'Создание сайтов',
		to: '/site-developing'
	}
]}



export default function MainPage() {

	return(		
		<div>
			<div>
			<Helmet>
				<title>
					Офисный аутсорсинг
				</title>
				<meta name="description" content="офисный аутсорсинг" />
				<meta name="keywords" content="аутсорсинг офисный аутсорсинг аутсорсинг цена" />
				<base target="http://documentprepare.ru/" />
			</Helmet>
			</div>

			<div className="container-fluid container-pages">
				
				<br/>
				<Grid>
					<Row>
						<Col md={12} lg={12}>
							<Jumbotron>
								<h2 className="display-1 text-center">
									Добро пожаловать на сайт аутсорсинга офисных услуг.
								</h2>
							</Jumbotron>
							<div className="carousel-wrap">
								<MyCarousel carouselProps={carouselProps} />					
							</div>
							<div style={{marginTop: '8em'}}></div>
							<div className="outsourceDesc">
								<p>
									<strong>Аутсорсинг</strong> - это передача части функционала производственной деятельности на исполнение другой организации, специализирующейся в данной области. 
									Данная услуга актуальна для тех, кто имеет потребности во временном найме персонала (уход сотрудника на больничный, в декрет, сезонный характер работ и т.д.). 
									Также аутсорсинг актуален и в случае передачи функционала на постоянной основе, например для снижения издержек компании, расширении бизнеса и поиска квалифицированных работников.
									Офисный аутсорсинг предполагает передачу функционала (его части) именно офисной работы - создания и обработки документов, написания статей и прочего. 
								</p>
							</div>
							<h2 className="text-center">Что мы предлагаем.</h2>
							<br/>
							<br/>
							<div className="decoy">
								<p>
									Если Вы замечаете, что на рутинную офисную работу стала уходить львиная доля ваших ресурсов, есть повод задуматься о передаче данного функционала на аутсорсинг. 
									Мы предлагаем Вам свои услуги по выполнению офисной работы. Также Вы можете заказать у нас разработку сайта для вашей компании.

								</p>
							</div>
							<div style={{marginTop: '3em'}}></div>
							
							<h2 className="text-center">Почему именно у нас?</h2>
						</Col>
					</Row>
				</Grid>

				
				
				

				
				
				<div className="container-fluid padding">
					<div className="row padding">
						<div className="col-lg-12">
							
						</div>
					</div>
					<br/>
					<br/>
					<br/>


				</div>

				<Grid>
					<Row>
						<Col md={3} lg={3} className="myCards">
							<i className="material-icons">alarm_add</i>
							<h4 className="cardHeader">
								Экономия времени для Вас и вашего бизнеса.
							</h4>
							<hr/>
							<p>
								Пока мы работаем Вы занимаетесь своими делами.
							</p>
						</Col>
						<Col md={3} lg={3} className="myCards">
							<i className="material-icons">account_balance_wallet</i>
							<h4 className="cardHeader">
								Аутсорсинг бережет ваши средства.
							</h4>
							<hr/>
							<p>
							Наши цены приятно удивят Вас.
							</p>
						</Col>
						<Col md={3} lg={3} className="myCards">
							<i className="material-icons">assignment_turned_in</i>
							<h4 className="cardHeader">
								Вы получаете нужный результат. 
							</h4>
							<hr/>
							<p>
								Мы индивидуально подходим к каждому клиенту.
							</p>						
						</Col>
						<Col md={3} lg={3} className="myCards">
							<i className="material-icons">thumb_up</i>
							<h4 className="cardHeader">
								Надежный сервис для решения рутинных дел. 
							</h4>
							<hr/>
							<p>
								Больше не нужно искать ресурсы для ваших задач. Все данные строго конфиденциальны.
							</p>
						</Col>
					</Row>
				</Grid>

				<br/>
				<br/>
				<br/>




			</div>

			<footer>
				<SendMail 
					sentPage={"main_page"} 
					formText={"Здесь вы можете задать общий вопрос или направить ваше пожелание"} 
					haveFilepond={true} 
				/>
			</footer>		
		</div>
	);
};



