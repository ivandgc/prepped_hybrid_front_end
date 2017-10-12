import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as IngredientsActions from '../actions/ingredients'
import { ListItem, Icon } from 'react-onsenui'

class Ingredient extends React.Component {
  render(){
    let ingredient = this.props.ingredient[0]
    let deleteIcon = <div className='right' onClick={() => this.props.deleteIngredient(this.props.ingredient[0])}><Icon icon='md-delete'/></div>
    if(this.props.ingredient.length !== 1){
      ingredient = `${this.props.ingredient[0]}, missing in ${this.props.ingredient[1]} recipes`
      deleteIcon = ''
    }

    return(
      <ListItem>
        <div>{ingredient}</div>
        {deleteIcon}
      </ListItem>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(IngredientsActions, dispatch)
}

export default connect(null, mapDispatchToProps)(Ingredient)
