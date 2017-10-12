export function addIngredient(ingredient) {
  const jwtToken = localStorage.getItem("jwt")
  return function(dispatch){
    dispatch({type: 'LOADING_INGREDIENTS'})
    fetch('http://localhost:3000/api/v1/ingredients',{
      method: 'POST',
      body: JSON.stringify({ingredient}),
			headers: {
        "Authorization":`Bearer ${jwtToken}`,
				"Content-Type": "application/json"
			}
    })
      .then(res => res.json())
      .then(json => {
        dispatch({ type: 'DISPLAY_RECIPES',
          payload: {matched: json.recipes, partial: json.partial_matches} })
        dispatch({ type: 'DISPLAY_INGRIDIENTS',
          payload: {userIngredients: json.ingredients, missingIngredients: json.missing_ingredients} })
        dispatch({type: 'DONE_LOADING'})
      })
  }
}

export function deleteIngredient(ingredient) {
  const jwtToken = localStorage.getItem("jwt")
  return function(dispatch){
    fetch('http://localhost:3000/api/v1/ingredients',{
      method: 'DELETE',
      body: JSON.stringify({ingredient}),
			headers: {
        "Authorization":`Bearer ${jwtToken}`,
				"Content-Type": "application/json"
			}
    })
      .then(res => res.json())
      .then(json => {
        dispatch({ type: 'DISPLAY_RECIPES',
          payload: {matched: json.recipes, partial: json.partial_matches} })
        dispatch({ type: 'DISPLAY_INGRIDIENTS',
          payload: {userIngredients: json.ingredients, missingIngredients: json.missing_ingredients} })
      })
  }
}
