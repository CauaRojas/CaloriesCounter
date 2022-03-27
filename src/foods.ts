const foodData = await import('./foodData.json');
const foods = foodData.default.Food_Display_Table.Food_Display_Row;

export default foods;
