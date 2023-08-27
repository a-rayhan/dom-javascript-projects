const searchBox = document.querySelector('.search-box');
const searchBtn = document.querySelector('.search-btn');
const recipeContainer = document.querySelector('.recipe-container');
const itemsFound = document.getElementById('items-found');

const fetchRecipes = async (query) => {
    const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
    const response = await data.json();
    console.log(response);
    itemsFound.innerHTML = `Total ${response.meals.length} ${query} recipe items found!`;

    response.meals.forEach(meal => {
        const div = document.createElement('div');
        div.classList.add('recipe');
        div.innerHTML = `
        <img src="${meal.strMealThumb}" alt="">
        <p>${meal.strMeal}</p>
        <p>${meal.strArea}</p>
        <p>${meal.strCategory}</p>
        <button>View details</button>
        `
        recipeContainer.appendChild(div)
    })
}

searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    fetchRecipes(searchBox.value.trim());
})