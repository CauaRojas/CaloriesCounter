import foods from './foods';

export default function FoodPanel() {
	// Create a function that returns 15 li with random food names
	const loopFoods = () => {
		const randomFoods = foods.sort(() => Math.random() - 0.5);
		const foodList = randomFoods.map((food, index) => {
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
