export function recipeCardTemplate(recipes) {
    function getRecipeCardDOM() {
        const recipesCard = document.createElement("article");
        recipesCard.classList.add("recipe-card");
        recipesCard.innerHTML = `
    <div class="card-top">
        <img
            src="./src/assets/images/${recipes.image}"
            alt="${recipes.name}"
        />
        <span class="recipe-time"> ${recipes.time} min</span>
    </div>
    <div class="card-infos">
        <h2>${recipes.name}</h2>
        <section>
            <h3>RECETTE</h3>
            <p>
            ${recipes.description}
            </p>
        </section>
        <section class="card-content">
            <h3>INGREDIENTS</h3>
            <ul class="recipe-ingredients">
        ${getRecipeIngredients(recipes.ingredients).innerHTML}
        </ul>
        </section>
    </div>
    </div>
    `;
        return recipesCard;
    }
    getRecipeCardDOM();
    return { getRecipeCardDOM };
}

function getRecipeIngredients(ingredients) {
    const list = document.createElement("ul");
    list.classList.add("recipe-ingredients");

    ingredients.forEach((ingredient) => {
        const ingredientItem = document.createElement("li");
        const ingredientName = document.createElement("h4");
        const ingredientData = document.createElement("span");
        ingredientName.textContent = ingredient.ingredient;

        if (ingredient.quantity && ingredient.unit) {
            ingredientData.textContent = `${ingredient.quantity} ${ingredient.unit}`;
            ingredientName.appendChild(ingredientData);
        } else if (ingredient.quantity) {
            ingredientData.textContent = `${ingredient.quantity}`;
            ingredientItem.appendChild(ingredientData);
        } else if (!ingredient.quantity){
            ingredientData.textContent = '-';
            ingredientItem.appendChild(ingredientData);
        }
        ingredientItem.appendChild(ingredientName);
        ingredientItem.appendChild(ingredientData);
        list.appendChild(ingredientItem);
    });
    return list;
}
