export function signUp(newUser) {
  return function(dispatch){
    fetch('http://localhost:3000/api/v1/users',{
      method: 'POST',
      body: JSON.stringify({user: newUser}),
      headers: {
        "Content-Type":"application/json"
      }
    })
      .then(res => res.json())
      .then(json => {
        localStorage.setItem('jwt', json.jwt)
        dispatch({  type: "LOGIN",
                    payload: json.user})
      })
 }
}

export function logOut(){
  return{ type: 'LOGOUT'}
}

export function logIn(user) {
  return function(dispatch){
    fetch('http://localhost:3000/api/v1/login',{
      method: 'POST',
      body: JSON.stringify({user: user}),
      headers: {
        "Content-Type":"application/json"
      }
    })
      .then(res => res.json())
      .then(json => {
        localStorage.setItem('jwt', json.jwt)
        dispatch({  type: "LOGIN",
                    payload: json.user})
      })
 }
}
