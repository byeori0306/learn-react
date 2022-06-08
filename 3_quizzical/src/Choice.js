import React from 'react';

function Choice(props) {
	const holding = {
		backgroundColor: props.choice.isHeld? "#D6DBF5" : "#F5F7FB"
	}

	function ending() {
		let color
		if (props.choice.isAnswer)
			color = "#94D7A2"
		else if (props.choice.isHeld && !props.choice.isAnswer)
			color = "#F8BCBC"
		return {backgroundColor: color}
	}

	return (
		<button 
			className="choice"
			style={props.gameover? ending() : holding}
			name={props.choice.value}
			disabled={props.gameover? true : false}
			onClick={(e) => props.chooseChoice(e)}
		>
			{props.choice.value}
		</button>
	);
}

export default Choice;