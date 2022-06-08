import React from 'react'
import Quiz from './Quiz'

function Quizzical() {
	const [quizes, setQuizes] = React.useState([])
	const [gameover, setGameover] = React.useState(false);
	const [correctAnswers, setCorrectAnswers] = React.useState(0);

	React.useEffect(() => {
		fetch('https://opentdb.com/api.php?amount=5&category=9&type=multiple')
			.then(res => res.json())
			.then(data => setQuizes([...data.results]))
	}, [])

	const button = gameover?
					<div>
						<h3>{`You scored ${correctAnswers}/5 correct answers!`}</h3>
						<button>Play again</button>
					</div>
					: <button onClick={() => setGameover(true)}>Check answers</button>

	return (
		<div className="container">
			{quizes.map((quiz, idx) =>
				<Quiz 
					key={idx}
					question={quiz.question} 
					answer={quiz.correct_answer} 
					traps={quiz.incorrect_answers}
					gameover={gameover}
				/>
			)}
			{button}
		</div>
	)
}

export default Quizzical;