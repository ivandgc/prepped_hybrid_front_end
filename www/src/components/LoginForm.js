import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as UserActions from '../actions/user'
import { Input, Button } from 'react-onsenui'
import { withRouter } from 'react-router-dom'

class LoginForm extends React.Component {
  state = {
    username: '',
    password: ''
  }

  handleChange = (event) => {
    this.setState({
			[event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    this.props.logIn({
      username: this.state.username,
      password: this.state.password
    })
  }

  render(){
    return(
      <div className="userForm">
        <Input required
          name="username"
          value={this.state.username}
          onChange={this.handleChange}
          modifier='underbar'
          float
          placeholder='Username' />
        <br/><br/>
        <Input required
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
          modifier='underbar'
          type='password'
          float
          placeholder='Password' />
          <br/><br/>
        <Button style={{backgroundColor: 'black'}} onClick={this.handleSubmit}>Sign in</Button>
        <br/><br/><br/><br/>
        <h4 style={{color: 'black'}} onClick={() => this.props.history.push('/SignUp')}>Sign Up!</h4>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(UserActions, dispatch)
}

export default withRouter(connect(null, mapDispatchToProps)(LoginForm))
