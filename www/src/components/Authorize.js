import React from 'react'


function Authorize(RenderedComponent, props){
  return class extends React.Component {
    componentWillMount() {
        if (!localStorage.getItem('jwt') && this.props.location.pathname !== "login") {
          this.props.history.push("/login")
        } else {}
    }
    render() {

      return (<RenderedComponent {...props} {...this.props}/>)

    }
  }
}


export default Authorize

requireLoggedIn = (targetLink) => {
  return localStorage.getItem('jwt') ? (
          targetLink
        ) : (
          <Redirect to="/login"/>
        )
}

checkLoggedIn = (targetLink) => {
  return localStorage.getItem('jwt') ? (
          <Redirect to="/"/>
        ) : (
          targetLink
        )
}
