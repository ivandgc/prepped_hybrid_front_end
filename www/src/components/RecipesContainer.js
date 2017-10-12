import React from 'react'
import { connect } from 'react-redux'
import * as RecipeActions from '../actions/recipes'
import { bindActionCreators } from 'redux'
import RecipesList from './RecipesList'
import { Page, Modal } from 'react-onsenui'

class RecipesContainer extends React.Component {

  componentDidMount(){
    this.props.fetchUserAndRecipes()
  }

  render(){

    let modalContent = <iframe width="80%" height="80%" src={this.props.recipes.selectedRecipe.source_url}/>
    if(this.props.platform.platform !== "browser"){
      modalContent = <Page><iframe width="70%" height="95%" sandbox="" src={this.props.recipes.selectedRecipe.source_url}/></Page>
    }

    let missingIngredientContent = ''
    if(this.props.recipes.missingIngredients !== ''){
      if(this.props.platform.platform !== "browser"){
        alert("Missing Ingredient: " + this.props.recipes.missingIngredients)
      } else {
        missingIngredientContent = `Missing Ingredient: ${this.props.recipes.missingIngredients}`
      }
    }

    return(
      <div>
        <Page renderModal={() => (
          <Modal isOpen={this.props.recipes.showRecipe} onClick={this.props.closeRecipe}>
            <p>{missingIngredientContent}</p>
            {modalContent}
          </Modal>)}>
        <RecipesList recipes={this.props.recipes.list} partialRecipes={this.props.recipes.partialRecipes}/>
      </Page>
      </div>
    )
  }

}

function mapStateToProps(state){
  return state
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(RecipeActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipesContainer)
