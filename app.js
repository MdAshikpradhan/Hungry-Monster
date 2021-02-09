
const searchMeals = () => {
    const searchText = document.getElementById('search-field').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals));
}


const displayMeals = meals => {
    const mealsContainer = document.getElementById('mealContainer');
    mealsContainer.innerText = '';
    meals.forEach(meal => {
        const mealDiv = document.createElement('div');
        mealDiv.className = 'mealDiv';
        mealDiv.innerHTML = `
            <div  onclick="displayMealsDetails('${meal.idMeal}')" data-id="${meal.idMeal}" >
            <img src="${meal.strMealThumb}" alt="">
            <h3 class="mt-2">${meal.strMeal}</h3>
            </div>
        `;
        mealsContainer.appendChild(mealDiv);
    });
}



const displayMealsDetails = name => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${name}`
            fetch(url)
            .then(res => res.json())
            .then(data => ingredients(data.meals[0]))
}

const ingredients = ingredients => {
    console.log(ingredients);
    const mealIngredientsDiv = document.getElementById('mealIngredients');
    mealIngredientsDiv.innerHTML = `
        <div>
        <img src="${ingredients.strMealThumb}" alter="">
        </div>
        <div>
        <h3>${ingredients.strMeal}</h3>
        <p>ingredients</p>
        <li> <i class="fas fa-check-square"></i> ${ingredients.strIngredient1}</li>
        <li> <i class="fas fa-check-square"></i> ${ingredients.strIngredient2}</li>
        <li> <i class="fas fa-check-square"></i> ${ingredients.strIngredient3}</li>
        <li> <i class="fas fa-check-square"></i> ${ingredients.strIngredient4}</li>
        <li> <i class="fas fa-check-square"></i> ${ingredients.strIngredient5}</li>
        <li> <i class="fas fa-check-square"></i> ${ingredients.strIngredient6}</li>
        <li> <i class="fas fa-check-square"></i> ${ingredients.strIngredient7}</li>
        <li> <i class="fas fa-check-square"></i> ${ingredients.strIngredient8}</li>
        <li> <i class="fas fa-check-square"></i> ${ingredients.strIngredient9}</li>
        </div>
    `
}