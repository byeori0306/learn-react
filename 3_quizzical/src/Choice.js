import React from 'react';

function Choice(props) {
	const holding = {
		backgroundColor: props.choice.isHeld? "#D6DBF5" : "#F5F7FB",
		borderColor: props.choice.isHeld? "#D6DBF5" : "#293264"
	}

	function ending() {
		if (props.choice.isAnswer)
			return {
				backgroundColor: "#94D7A2",
				border: "none"
			}
		else if (props.choice.isHeld && !props.choice.isAnswer)
			return {
				backgroundColor: "#FFD3D9",
				border: "none",
				color: "#bbb",
				cursor: "default"
			}
		else
			return {
				color: "#bbb",
				cursor: "default"
			}
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