import { recipeCardTemplate } from "../factories/cards.js";


async function displayData(recipes) {
    const recipesContainer = document.querySelector(".recipes-container");
    let recipeCount = 0;
    recipes.forEach((recipes) => {
        const recipeModel = recipeCardTemplate(recipes);
        const recipeCardDOM = recipeModel.getRecipeCardDOM();
        recipesContainer.appendChild(recipeCardDOM);
    });
}

async function init() {
    const recipes = await fetch("./src/data/recipes.json")
        .then((response) => response.json())
        .then((data) => {
            return data.recipes;
        });

        const ingredients = recipes.map((recipe) => recipe.ingredients);
        console.log(ingredients);
        displayData(recipes);

}

init();
