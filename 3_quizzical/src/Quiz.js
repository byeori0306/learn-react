import React from 'react'
import Choice from './Choice'

function Quiz(props) {
	const [choices, setChoices] = React.useState(shuffleChoices());

	function shuffleChoices() {
		const givenChoices = [props.answer, ...props.traps];
		const shuffledChoices = [];

		for (let i = givenChoices.length - 1; i > 0; i--) {
			let j = Math.floor(Math.random() * (i + 1));
			[givenChoices[i], givenChoices[j]] = [givenChoices[j], givenChoices[i]];
		}
		
		for (let i = 0; i < givenChoices.length; i++) {
			shuffledChoices.push({
				value: givenChoices[i],
				isHeld: false,
				isAnswer: givenChoices[i] === props.answer? true : false
			})
		}
		return shuffledChoices;
	}

	function chooseChoice(e) {
		setChoices(oldChoice => oldChoice.map(choice => {
			if (choice.value === e.target.name)
				return {...choice, isHeld: !choice.isHeld};
			else
				return {...choice, isHeld: false}
		}))
	}

	return (
		<div className="quiz">
			<h4>{props.question}</h4>
			<div className="choices">
				{choices.map((choice, idx) => {
					return  <Choice 
								key={idx}
								choice={choice}
								gameover={props.gameover}
								chooseChoice={chooseChoice}
							/>
				})}
			</div>
		</div>
	)
}

export default Quiz;