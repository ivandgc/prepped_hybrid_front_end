import React from 'react'
import { SearchInput } from 'react-onsenui'

class IngredientInput extends React.Component {
  state = {
    input: ''
  }

  handleChange = (event) => {
    this.setState({ input: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.postIngredient(this.state.input)
    this.setState({ input: ''})
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit} >
        <SearchInput placeholder='Add Ingredient' required onChange={this.handleChange} value={this.state.input} style={{textAlign: 'center', width: '100%'}}/>
        <input type="submit" style={{display: "none"}} />
      </form>
    )
  }
}

export default IngredientInput
