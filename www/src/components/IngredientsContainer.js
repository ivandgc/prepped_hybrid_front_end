import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as IngredientsActions from '../actions/ingredients'
import IngredientsList from './IngredientsList'
import IngredientInput from './IngredientInput'
import { Page, Modal, ProgressCircular } from 'react-onsenui'

class IngredientsContainer extends React.Component {

  render(){
    return(
      <div>
        <Page renderModal={() => (
          <Modal isOpen={this.props.isLoading}>
            <ProgressCircular indeterminate />
          </Modal>)}>
          <IngredientInput postIngredient={this.props.addIngredient} />
          <IngredientsList userIngredients={this.props.list} missingIngredients={this.props.missing} />
        </Page>
      </div>
    )
  }

}


function mapStateToProps(state){
  return state.ingredients
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(IngredientsActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(IngredientsContainer)
