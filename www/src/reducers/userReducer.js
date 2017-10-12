export default function userReducer(state = {id: '', username: '', email: ''}, action) {

  switch (action.type) {
    case 'LOGIN':
      return action.payload
    case 'LOGOUT':
      localStorage.removeItem('jwt')
      return {id: '', username: '', email: ''}
    default:
      return state
  }
}
