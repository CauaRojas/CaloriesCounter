import { useState } from 'react';
import './App.css';
import FoodPanel from './FoodPanel';
import SearchBar from './SearchBar';

function App() {
	return (
		<>
			<SearchBar />
			<FoodPanel />
		</>
	);
}

export default App;
