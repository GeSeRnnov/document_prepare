import React from 'react';
// import PropTypes from 'prop-types';
import { Carousel } from 'react-bootstrap';
import SimpleLink from './SimpleLink';




export default function MyCarousel({ carouselProps }) {

	return(
		<Carousel>
			{
				carouselProps.items.map(item => 
						<Carousel.Item key={item.id}>
					<SimpleLink to={item.to}>
							<img height={500} src={item.img} alt={item.alt} />
					</SimpleLink>
							<Carousel.Caption>
								<h1 className="display-1 text-center">
									{item.txt}
								</h1>
							</Carousel.Caption>
						</Carousel.Item>
			)}
		</Carousel>
	);
}

// <a href={item.href}>
// 							<img height={500} src={item.img} alt={item.alt} />
// 							</a>
