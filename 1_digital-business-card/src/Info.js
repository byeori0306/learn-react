import React from 'react'
import Laura from './img/laura.png'
import email_icon from './img/mail.svg'
import linkedin_icon from './img/linkedin.svg'

export default function Info() {
	return (
		<div>
			<img src={Laura} alt='Laura Smith'/>
			<h2>Laura Smith</h2>
			<h5>Frontend Developer</h5>
			<h6>laurasmith.website</h6>
			<button><img src={email_icon} alt='E-mail icon'/>Email</button>
			<button><img src={linkedin_icon} alt='Linkedin icon'/>Linkedin</button>
		</div>
	);
}