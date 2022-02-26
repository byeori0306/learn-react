import React from 'react'

export default function Card(props) {
	return (
		<div>
			<div className='card'>
				<img src={`./images/${props.img}`} alt='Place' className='card--image'/>
				<div className='card--desc'>
					<div className='card--location'>
						<img src='./images/icon.png' alt='Icon' className='card--icon'/>
						<h5 className='card--country'>{props.country}</h5>
						<a href={props.url} className='card--url'>View on Google Maps</a>
					</div>
					<h2 className='card--place'>{props.place}</h2>
					<h5 className='card--date'>{props.date}</h5>
					<p className='card--content'>{props.content}</p>
				</div>
			</div>
			<hr></hr>
		</div>
	)
}