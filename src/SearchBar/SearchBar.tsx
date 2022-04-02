import { useState } from 'react';
import './SearchBar.css';
import foods from '../foods';

// Create a function that filters the foods array by the search term
const filterFoods = (searchTerm: string) => {
	const filteredFoods = foods.filter((food) => {
		return food.Display_Name.toLowerCase().includes(
			searchTerm.toLowerCase()
		);
	});
	return filteredFoods;
};

export default function SearchBar() {
	const [searchTerm, setSearchTerm] = useState('');
	return (
		<>
			<div className='search-bar'>
				<input
					type='text'
					placeholder='Search'
					id='search'
					onKeyDown={() => {
						setSearchTerm(
							(
								document.getElementById(
									'search'
								) as HTMLInputElement
							).value
						);
					}}
				/>
				<button
					onClick={() => {
						console.log(
							filterFoods(
								(
									document.getElementById(
										'search'
									) as HTMLInputElement
								).value
							)
						);
					}}>
					Search
				</button>
			</div>{' '}
			{(document.getElementById('search') as HTMLInputElement)?.value
				.length > 2 && (
				<SearchResults
					searchTerm={
						(document.getElementById('search') as HTMLInputElement)
							?.value
					}
				/>
			)}
		</>
	);
}

function SearchResults({ searchTerm }: { searchTerm: string }) {
	return (
		<div className='search-results'>
			<h1>Search Results</h1>
			<ul>
				{filterFoods(searchTerm).map((food, index) => {
					return (
						<li key={index}>
							{food.Display_Name} -{' '}
							{parseFloat(food.Calories).toFixed(2)}
						</li>
					);
				})}
			</ul>
		</div>
	);
}
