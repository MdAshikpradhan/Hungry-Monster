function myFunction() {
    const search = document.getElementById('searchBar').value;
    document.getElementById('food').innerHTML = search;
}


fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
.then(res => res.json())
.then(data => displayMeal(data))

const displayMeal = food => {
    const foodsDiv = document.getElementById('food');
        const mealDiv = document.createElement('div');
        mealDiv.className = 'meal';
        const mealInfo = `
        <h1>${food.idMeal}</h1>
        `;
        mealDiv.innerHTML = mealInfo;
        foodsDiv.appendChild(mealDiv);
}