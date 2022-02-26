import React from 'react'
import Header from './Header'
import Card from './Card'
import data from './data'

export default function App() {
	const cards = data.map(item => {
		return (
			<Card
				key={item.id}
				{...item}
			/>
		)
	})
	return (
		<div>
			<Header />
			<main>
				{cards}
			</main>
		</div>
	)
}