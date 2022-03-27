import { useContext } from 'react';
import foods from './foods';

export default function FoodPanel() {
	// Create a function that returns 15 li with food names
	const loopFoods = () => {
		const foodList = foods.map((food, index) => {
			return <li key={index}>{food.Display_Name}</li>;
		});
		foodList.splice(15, foodList.length);
		return foodList;
	};
	return (
		<div className='food-panel'>
			<header>
				<h1>Food Panel</h1>
			</header>
			<article>
				<ul>{loopFoods()}</ul>
			</article>
		</div>
	);
}
