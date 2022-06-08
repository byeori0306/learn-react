import React from "react";

function Start(props) {
	return (
		<div className="container">
			<h1>Quizzical</h1>
			<h4>Choose right answers and check answers!</h4>
			<button onClick={() => props.startGame()}>Start quiz</button>
		</div>
	);
}

export default Start;