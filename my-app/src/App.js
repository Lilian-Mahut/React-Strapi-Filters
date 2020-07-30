import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
		<div className="App">
			<header className="App-header">
				{/* Filtres type d'évènements */}
				<select name="typeOfEvent" id="type-event-select">
					<option value="">--Choisir un type d'event</option>
					<option value="sport">Sport</option>
					<option value="boire">Boire</option>
					<option value="manger">Manger</option>
					<option value="voyage">Voyage</option>
				</select>

				<button>SPORT</button>
				<button>BOIRE</button>
				<button>MANGER</button>
				<button>VOYAGE</button>

				{/* Filtres places disponibles */}
				<select name="typeOfEvent" id="type-event-select"></select>
			</header>
		</div>
	);
}

export default App;
