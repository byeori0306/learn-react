import React from 'react'
import './style.css'

export default function Header() {
	return (
		<header>
			<img src='./images/logo.png' alt='Logo' className='header--logo'/>
			<h4 className='header--title'>my travel journal.</h4>
		</header>
	)
}