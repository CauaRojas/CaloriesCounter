import foods from '../foods';
import './FoodPanel.css';

export default function FoodPanel() {
	// Create a function that returns 15 li with random food names
	const loopFoods = () => {
		const randomFoods = foods.sort(() => Math.random() - 0.5);
		const foodList = randomFoods.map((food, index) => {
			return (
				<li key={index}>
					{food.Display_Name} - {parseFloat(food.Calories).toFixed(2)}
				</li>
			);
		});
		foodList.splice(15, foodList.length);
		return foodList;
	};

	return (
		<div className='food-panel'>
			<header>
				<h1>Foods</h1>
			</header>
			<article>
				<ul>{loopFoods()}</ul>
			</article>
		</div>
	);
}
