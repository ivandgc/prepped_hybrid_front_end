export default function ingredientsReducer(state = {list: [], missing: [], isLoading: false}, action) {

  switch (action.type) {
    case 'DISPLAY_INGRIDIENTS':
      return {...state, list: action.payload.userIngredients, missing: action.payload.missingIngredients }
    case 'LOADING_INGREDIENTS':
      return {...state, isLoading: true}
    case 'DONE_LOADING':
      return {...state, isLoading: false}
    default:
      return state
  }
}
