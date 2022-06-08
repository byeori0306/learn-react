import React from 'react'
import Quiz from './Quiz'

function Quizzical(props) {
	const [quizes, setQuizes] = React.useState([])
	const [gameover, setGameover] = React.useState(false);
	const [correctAnswers, setCorrectAnswers] = React.useState(0);

	React.useEffect(() => {
		fetch('https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple')
			.then(res => res.json())
			.then(data => setQuizes([...data.results]))
	}, [])

	function increaseCount() {
		setCorrectAnswers(prev => prev + 1)
	}

	function decreaseCount() {
		setCorrectAnswers(prev => prev - 1)
	}

	const button = gameover?
					<h3 className="board">{`You scored ${correctAnswers}/5 correct answers!`}</h3>
					: <button onClick={() => setGameover(true)}>Check answers</button>

	return (
		<div className="quizzical">
			{quizes.map((quiz, idx) =>
				<Quiz 
					key={idx}
					question={quiz.question} 
					answer={quiz.correct_answer} 
					traps={quiz.incorrect_answers}
					gameover={gameover}
					increaseCount={increaseCount}
					decreaseCount={decreaseCount}
				/>
			)}
			{button}
		</div>
	)
}

export default Quizzical;