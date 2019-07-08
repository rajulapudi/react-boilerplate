import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	render() {
		return (
			<div className="element">
				<h1>
					Hi From Pranee
				</h1>
			</div>
		)
	}
}

ReactDOM.render(<App />, getElementById('root'));
