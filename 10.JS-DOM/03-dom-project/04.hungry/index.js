const searchMeal = () => {
    const getMealName = document.getElementById("search-meal");
    const mealName = getMealName.value;

    const getMeals = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`;

    fetch(getMeals)
        .then((res) => res.json())
        .then((data) => searchMealResult(data.meals));
};

const searchMealResult = (meals) => {
    const displayMeals = document.getElementById("display-search-meal");
    meals.forEach((meal) => {
        const div = document.createElement("div");
        div.classList.add("col");

        console.log(meal);
        div.innerHTML = `
            <div class="card">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                </div>
            </div>
        `;
        displayMeals.appendChild(div);
    });
};
