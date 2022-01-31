import React from 'react'
import twitter_icon from './img/twitter.svg'
import facebook_icon from './img/facebook.svg'
import instagram_icon from './img/instagram.svg'
import github_icon from './img/github.svg'

export default function Footer() {
	return (
		<footer>
			<img src={twitter_icon} alt='Twitter icon'/>
			<img src={facebook_icon} alt='Facebook icon'/>
			<img src={instagram_icon} alt='Instagram icon'/>
			<img src={github_icon} alt='Github icon'/>
		</footer>
	);
}