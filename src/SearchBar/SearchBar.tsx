import './SearchBar.css';
import foods from '../foods';
export default function SearchBar() {
	// Create a function that filters the foods array by the search term
	const filterFoods = (searchTerm: string) => {
		const filteredFoods = foods.filter((food) => {
			return food.Display_Name.toLowerCase().includes(
				searchTerm.toLowerCase()
			);
		});
		return filteredFoods;
	};

	return (
		<div className='search-bar'>
			<input type='text' placeholder='Search' id='search' />
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
		</div>
	);
}
