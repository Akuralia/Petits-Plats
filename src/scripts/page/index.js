import { recipeCardTemplate } from "../factories/cards.js";

const searchBar = document.getElementById("search-bar");

export async function displayData(recipes, filteredRecipes) {
    const recipesContainer = document.querySelector(".recipes-container");

    if (searchBar.value === "" || searchBar.value === undefined) {
        recipesContainer.innerHTML = "";
        recipes.forEach((recipes) => {
            const recipeModel = recipeCardTemplate(recipes);
            const recipeCardDOM = recipeModel.getRecipeCardDOM();
            recipesContainer.appendChild(recipeCardDOM);
        });
        countRecipes(recipes, filteredRecipes);
    } else {
        recipesContainer.innerHTML = "";
        filteredRecipes.forEach((recipes) => {
            const recipeModel = recipeCardTemplate(recipes);
            const recipeCardDOM = recipeModel.getRecipeCardDOM();
            recipesContainer.appendChild(recipeCardDOM);
        });
        countRecipes(recipes, filteredRecipes);
    }
}

export function countRecipes(recipes, filteredRecipes) {
    const searchBarInput = searchBar.value;
    const recipeNbr = document.getElementById("count");
    if (searchBarInput === "" || searchBarInput === undefined) {
        const recipesNbr = recipes.length;
        recipeNbr.innerHTML = `${recipesNbr}`;
    } else {
        const filteredNbr = filteredRecipes.length;
        recipeNbr.innerHTML = `${filteredNbr}`;
    }
}

export function getRecipes() {
    return fetch("./src/data/recipes.json")
        .then((response) => response.json())
        .then((data) => {
            return data.recipes;
        });
}

async function init() {
    let recipes = await getRecipes();
    displayData(recipes);
    countRecipes(recipes);
}

init();
