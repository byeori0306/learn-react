import React from 'react';
import './style.css';
import Start from './Start';
import Quizzical from './Quizzical';

function App() {
	const [isStarting, setIsStarting] = React.useState(false);

	function startGame() {
		setIsStarting(prev => !prev);
	}

	return (
		<div className="App">
			{isStarting? <Quizzical /> : <Start startGame={startGame}/>}
		</div>
	);
}

export default App;
