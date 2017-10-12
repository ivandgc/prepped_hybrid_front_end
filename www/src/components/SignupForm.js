import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as UserActions from '../actions/user'
import { Input, Button } from 'react-onsenui'

class SignupForm extends React.Component {
  state = {
    username: '',
    email: '',
    password: '',
    passwordConfirmation: ''
  }

  handleChange = (event) => {
    this.setState({
			[event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    if(this.state.password !== this.state.passwordConfirmation){
      alert("passwords don't match!")
    }else {
      this.props.signUp({
        username: this.state.username,
        email: this.state.email,
        password: this.state.password
      })
    }

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
          name="email"
          type="email"
          value={this.state.email}
          onChange={this.handleChange}
          modifier='underbar'
          float
          placeholder='E-mail' />
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
        <Input required
          name="passwordConfirmation"
          value={this.state.password}
          onChange={this.handleChange}
          modifier='underbar'
          type='password'
          float
          placeholder='Confirm Password' />
          <br/><br/>
        <Button style={{backgroundColor: 'black'}} onClick={this.handleSubmit}>Sign in</Button>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(UserActions, dispatch)
}

export default connect(null, mapDispatchToProps)(SignupForm)
