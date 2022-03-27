import { useState } from 'react';
import './App.css';
import SearchBar from './SearchBar';
const foodData = await import('./foodData.json');
const foods = foodData.default.Food_Display_Table.Food_Display_Row;

function App() {
	return (
		<>
			<SearchBar />
			<h1>Hello World!</h1>;
		</>
	);
}

export default App;
