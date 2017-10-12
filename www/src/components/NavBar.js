import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as UserActions from '../actions/user'
import { Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

class NavBar extends React.Component {

render(){
	const logLinks = (localStorage.getItem('jwt')) ?

		<Menu.Menu position="right">
			<NavLink to={`/user/${this.props.user.username}`}>{this.props.user.username}</NavLink>
			<NavLink activeClassName="" to="/" onClick={this.props.logOut}>Log out</NavLink>
		</Menu.Menu> :

		<Menu.Menu position="right">
			<NavLink to='/signup'>Sign up</NavLink>
			<NavLink to='/login'>Log in</NavLink>
		</Menu.Menu>

	return(

		<Menu borderless className="nav-bar-background">
			<NavLink to='/'>Recipe APP</NavLink>
			{logLinks}
		</Menu>
	)
	}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(UserActions, dispatch)
}

export default connect(null,mapDispatchToProps)(NavBar)
