// DOM Element
import { getRecipes } from "../page/index.js";
import { displayData } from "../page/index.js";
import { countRecipes } from "../page/index.js";

const searchBar = document.getElementById("search-bar");
let delayTimeout;

export async function searchFilter() {
    const recipes = await getRecipes();
    const searchInput = searchBar.value;
    const regex = /^[a-zA-Z]{3,}$/;

    if (regex.test(searchInput)) {
        const filteredRecipes = recipes.filter((recipe) => {
            return (
                recipe.name.toLowerCase().includes(searchInput.toLowerCase()) ||
                recipe.description
                    .toLowerCase()
                    .includes(searchInput.toLowerCase()) ||
                recipe.ingredients.some((ingredient) => {
                    return ingredient.ingredient
                        .toLowerCase()
                        .includes(searchInput.toLowerCase());
                })
            );
        });

        return displayData(recipes, filteredRecipes);
    } else {
        return displayData(recipes);
    }
}

searchBar.addEventListener("input", () => {
    clearTimeout(delayTimeout);

    delayTimeout = setTimeout(() => {
        searchFilter();
    }, 1000);
});
