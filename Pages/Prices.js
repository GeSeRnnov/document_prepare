import React from 'react';
// import PropTypes from 'prop-types';
import MyTable from '../components/MyTable';
import { Col, Row, Grid } from 'react-bootstrap';
// import Helmet from 'react-helmet';
// <Helmet
// 				title="Цены на офисный аутсорсинг" 
// 				meta={[
// 					{	"name": "description",
// 						"content": "Цены на набор текста, рерайтинг, копирайтинг, офисную автоматизацию, разработку сайтов"
// 					},
// 					{	"name": "keywords",
// 						"content": "цены на набор текста рерайтинг копирайтинг офисную автоматизацию разработку сайтов"
// 					}
// 				]}
// 				base={{"href": "http://documentprepare.ru/"}}
// 			/>

const textPrepare = {
	header: [
		'Услуги', 
		'Ед.',
		'Цена, от'
	],
	rows: [
		['Набор и редактирование с печатного источника', 'руб./лист', 18],
		['Набор и редактирование с рукописного источника', 'руб./лист', 30],
		['Набор и редактирование с печатного источника на иностранном языке', 'руб./лист', 45],
		['Набор и редактирование с рукописного источника на иностранном языке', 'руб./лист', 75],
		['Встраивание функционала в ваш бизнес-процесс', 'руб.', 'договорная'],
		['Цена за срочность', 'руб.', 'цена * (от 2)']
	]
}

const copywriting = {
	header: [
		'Услуги', 
		'Ед.',
		'Цена, от'
	],
	rows: [
		['Рерайтинг', 'руб./1000 зн.', 45],
		['Копирайтинг', 'руб./1000 зн.', 60],
		['Цена за срочность', 'руб.', 'цена * (от 2)']
	]
}

const officemacro = {
	header: [
		'Услуги', 
		'Ед.',
		'Цена, от'
	],
	rows: [
		['Excel формула', 'руб.', 500],
		['Макрос Excel/Word/Outlook', 'руб.', 1000],
		['Интеграция Офиса со сторонними АС', 'руб.', 2000],
		['Разработка собственной АС на базе MS Office', 'руб.', 5000],
		['Разработка собственной АС на базе MS BI (Olap кубы)', 'руб.', 10000]
	]
}

const sitecreating = {
	header: [
		'Услуги', 
		'Ед.',
		'Цена, от'
	],
	rows: [
		['Сайт - визитка', 'руб.', 4000],
		['Изменение имеющегося сайта', 'руб.', 'договорная'],
		['Разработка полноценного сайта', 'руб.', 'договорная']
	]
}


function PricesPage(props) {
	// const { classes } = props;
	return(
		<div>
			

			<div className="container-fluid container-pages">
				<br/>
				<br/>
				<h1 className ="display-1 text-center first-element">
					 Цены за услуги.
				</h1>
				<br/>
				<br/>
				<br/>
				<h3>
					Обращаем Ваше внимание:
				</h3>
				<br/>
				<ul type="square">
					<li>
						 представлены минимальные значения диапазона цен.  
					</li>
					<li>
						 при отправке заказа, исполнитель ознакомится с ним и в ответном письме укажет оценочную стоимость заказа.   
					</li>
					<li>
						 исполнители могут требовать частичную предоплату. 
					</li>
					<li>
						 по окончании работы (или в процессе, если она длительная) вам будет выслано подтверждение о ее выполнение (скриншот, часть материала и т.п.).
					</li>
					<li>
						 после поступления платежа, все материалы будут высланы Вам по почте.
					</li>
				</ul>

				<Grid>
					<Row>
					<Col lg={10} sm={12}>
						<h3 className ="display-1 priceHeader">
							Набор текста.
						</h3>
						<br/>
						<MyTable tableData={textPrepare} />
						<br/>
						<h3 className ="display-1 priceHeader">
							Копирайтинг.
						</h3>
						<br/>
						<MyTable tableData={copywriting} />
						<br/>
						<h3 className ="display-1 priceHeader">
							Офисная автоматизация.
						</h3>
						<br/>
						<MyTable tableData={officemacro} />
						<br/>
						<h3 className ="display-1 priceHeader">
							Создание сайта.
						</h3>
						<br/>
						<MyTable tableData={sitecreating} />
						<br/>
					</Col>
					</Row>
				</Grid>
			</div>
			<footer>
						<br/>
						<br/>
			</footer>
		</div>
	);
};

export default PricesPage;
