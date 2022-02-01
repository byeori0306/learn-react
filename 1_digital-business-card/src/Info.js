import React from 'react'
import Laura from './img/laura.png'
import email_icon from './img/mail.svg'
import linkedin_icon from './img/linkedin.svg'

export default function Info() {
	return (
		<div className='info'>
			<img src={Laura} alt='Laura Smith'/>
			<h2 className='info--name'>Laura Smith</h2>
			<h5 className='info--job'>Frontend Developer</h5>
			<h6 className='info--site'>laurasmith.website</h6>
			<button className='info--button' id='mail-button'>
				<img src={email_icon} alt='E-mail icon' className='info--button-icon'/>Email
			</button>
			<button className='info--button' id='linkedin-button'>
				<img src={linkedin_icon} alt='Linkedin icon' className='info--button-icon'/>Linkedin
			</button>
		</div>
	);
}