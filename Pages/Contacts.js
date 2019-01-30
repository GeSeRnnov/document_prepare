import React from 'react';
import SendMail from '../components/SendMail';
import Helmet from 'react-helmet';

export default function ContactsPage() {
	return(
		<div>
			<Helmet
				title="Контакты" 
				meta={[
					{	"name": "description",
						"content": "Контакты офисного аутсорсинга. Онлайн-заявка."
					},
					{	"name": "keywords",
						"content": "Контакты офисного аутсорсинга Онлайн-заявка"
					}
				]}
				base={{"href": "http://documentprepare.ru/"}}
			/>
			<div className="container-fluid container-pages">
				<br/>
				<h2 className="text-center">Наши контакты</h2>
				<br/>
				<br/>
				<br/>
				<p>
					По всем вопросам Вы можете писать нам через формы отправки внизу экрана. 
				</p>
				<br/>
				<p>
					Также вы можете обращаться по адресу <a href="outsourcing@documentprepare.ru">outsourcing@documentprepare.ru</a>.
					В этом случае мы переадресуем ваше сообщение исполнителю.
				</p>

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