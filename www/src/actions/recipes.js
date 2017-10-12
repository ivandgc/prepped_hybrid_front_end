export function addRecipes(recipes) {
  return{
    type: 'ADD_RECIPES',
    payload: recipes
  }
}

export function showRecipe(recipe, missingIngredients) {
  return{
    type: 'SHOW_RECIPE',
    payload: {recipe: recipe, missingIngredients: missingIngredients}
  }
}

export function closeRecipe(recipe) {
  return{
    type: 'CLOSE_RECIPE',
    payload: recipe
  }
}

export function fetchUserAndRecipes(){
  return function(dispatch){
    const jwtToken = localStorage.getItem("jwt")
    fetch('http://localhost:3000/api/v1/',{
      headers:{
        "Authorization":`Bearer ${jwtToken}`,
        "Accept":"application/json"
      }
    })
      .then(res => res.json())
      .then(json => {
        dispatch({ type: "LOGIN",
          payload: json.user})
        dispatch({ type: 'DISPLAY_RECIPES',
          payload: {matched: json.recipes, partial: json.partial_matches} })
        dispatch({ type: 'DISPLAY_INGRIDIENTS',
          payload: {userIngredients: json.ingredients, missingIngredients: json.missing_ingredients} })
      })
  }
}
