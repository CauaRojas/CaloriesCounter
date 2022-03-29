import { useState } from 'react';
import './App.css';
import FoodPanel from './FoodPanel/FoodPanel';
import SearchBar from './SearchBar/SearchBar';

function App() {
	return (
		<>
			<SearchBar />
			<FoodPanel />
		</>
	);
}

export default App;
