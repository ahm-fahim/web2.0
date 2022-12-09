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

        // console.log(meal);
        div.innerHTML = `
            <div onclick="mealDetails(${meal.idMeal})" class="card">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                </div>
                <button
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
            >
                Launch demo modal
            </button>
            </div>
        `;
        displayMeals.appendChild(div);
    });
};

// meal details
const mealDetails = (idMeal) => {
    console.log(idMeal);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    fetch(url)
        .then((res) => res.json())
        .then((data) => getMealDeatils(data.meals[0]));
};

const getMealDeatils = (details) => {
    console.log(details);
    const showDetails = document.getElementById("showDetails");
    const div = document.createElement("div");

    div.innerHTML = `
        <h2>${details.strMeal}</h2> 
        <h4>Instruction:</h4>
        <p class="text-secondary">${details.strInstructions}</p>
        <button class="btn btn-danger"> <a href="${details.strYoutube}>YOUTUBE</a></button>       
    `;

    showDetails.appendChild(div);
    // showDetails.innerText= '';
};

document.getElementById("closeModal").addEventListener("click", () => {
    const showDetails = document.getElementById("showDetails");
    showDetails.innerHTML = "";
});
