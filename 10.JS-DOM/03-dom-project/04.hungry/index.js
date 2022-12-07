const searchMeal = () => {
    const getMealName = document.getElementById("search-meal");
    const mealName = getMealName.value;

    console.log(mealName);
    const getMeals = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`;

    fetch(getMeals)
        .then((res) => res.json())
        .then((data) => searchMealResult(data));
};

const searchMealResult = (meal) => {
    console.log(meal);
};
