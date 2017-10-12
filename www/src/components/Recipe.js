import React from 'react'
import { Image } from 'semantic-ui-react'
import { Card } from 'react-onsenui'
import * as RecipeActions from '../actions/recipes'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class Recipe extends React.Component {

  render(){
    const imageStyle = {backgroundImage: `url(${this.props.recipe.image_url})`}
    let platformStyle = 'browser'
    if(this.props.platform !== "browser"){
      platformStyle = 'mobile'
    }
    return(
      <Card material className={platformStyle} onClick={() => this.props.showRecipe(this.props.recipe, this.props.missingIngredients)}>
        <div className="container" style={imageStyle}>
          <div className="titleContainer">
            <p className="recipeTitle ">{this.props.recipe.title}</p>
          </div>
          {/* <a href={this.props.recipe.source_url} target="_blank">Recipe by: {this.props.recipe.publisher}</a> */}
        </div>
      </Card>
    )
  }
}

function mapStateToProps(state){
  return state.platform
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(RecipeActions, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Recipe)
