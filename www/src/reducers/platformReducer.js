export default function platformReducer(state = {platform: 'browser'}, action) {

  switch (action.type) {
    case 'CHANGE_PLATFORM':
      return { platform: action.payload }
    default:
      return state
  }

}
