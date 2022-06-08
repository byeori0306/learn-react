import React from 'react';

function Choice(props) {
	const styles = {
		backgroundColor: props.choice.isHeld? "#D6DBF5" : "#F5F7FB"
	}

	return (
		<button 
			className='choice'
			style={styles}
			name={props.choice.value}
			onClick={(e) => props.chooseChoice(e)}
		>
			{props.choice.value}
		</button>
	);
}

export default Choice;