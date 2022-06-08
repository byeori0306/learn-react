import React, { useEffect } from 'react'
import Quiz from './Quiz'

function Quizzical() {
	const [quizes, setQuizes] = React.useState([])

	React.useEffect(() => {
		fetch('https://opentdb.com/api.php?amount=5&category=9&type=multiple')
			.then(res => res.json())
			.then(data => setQuizes([...data.results]))
	}, [])

	return (
		<div className="container">
			{quizes.map((quiz, idx) =>
				<Quiz 
					key={idx}
					question={quiz.question} 
					answer={quiz.correct_answer} 
					traps={quiz.incorrect_answers}
				/>
			)}
			<button>Check answers</button>
		</div>
	)
}

export default Quizzical;