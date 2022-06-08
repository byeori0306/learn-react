import React from "react";

function Start(props) {
	return (
		<div className="start">
			<h1>Quizzical</h1>
			<h4>Choose right answers and check answers!</h4>
			<button 
				className="startButton" 
				onClick={() => props.startGame()}
			>
				Start quiz
			</button>
		</div>
	);
}

export default Start;