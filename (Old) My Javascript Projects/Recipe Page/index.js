let recipeObj = {
  title: "Cheese Pizza",
  imgSrc:
    "https://res.cloudinary.com/dsf2gec5l/image/upload/v1676022500/WebDev/Session%20-%2018/pizza-5179939_960_720_pfxbjj.jpg",
  ingredients: ["Pizza Base", "Oil", "Onions", "Salt", "Pizza Sauce", "Cheese"],
};

let recipeTitleEl = document.getElementById("recipeTitle");
recipeTitleEl.textContent = recipeObj.title;

let imageEl = document.getElementById("image");
imageEl.src = recipeObj.imgSrc;

let ingredientsListEl = document.getElementById("ingredientsList");

for (let eachIngredient of recipeObj.ingredients) {
  let itemEl = document.createElement("li");
  itemEl.textContent = eachIngredient;
  itemEl.classList.add("ingredient");
  ingredientsListEl.appendChild(itemEl);
}
