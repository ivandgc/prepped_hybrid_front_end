export default function recipesReducer(state = {list: [], partialRecipes: [], showRecipe: false, selectedRecipe: {}, missingIngredients: ''}, action) {

  switch (action.type) {
    case 'DISPLAY_RECIPES':
      return {...state, list: action.payload.matched, partialRecipes: action.payload.partial}
    case 'SHOW_RECIPE':
      return {...state, showRecipe: true, selectedRecipe: action.payload.recipe, missingIngredients: action.payload.missingIngredients}
    case 'CLOSE_RECIPE':
      return {...state, showRecipe: false, selectedRecipe: {}, missingIngredients: ''}
    default:
      return state
  }
}
