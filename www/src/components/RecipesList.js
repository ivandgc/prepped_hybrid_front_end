import React from 'react'
import Recipe from './Recipe'
import { Col, Row } from 'react-onsenui'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'


class RecipesList extends React.Component {

  render(){

    let recipeColumns = '25%'
    if(this.props.platform !== "browser"){
      recipeColumns = '50%'
    }

    let recipesHTML;
    if(this.props.history.location.pathname === "/"){
      recipesHTML = this.props.recipes.map( (r,i) => <Col width={recipeColumns} key={i}> <Recipe key={i} recipe={r}  missingIngredients=""/> </Col>)
    } else {
      recipesHTML = this.props.partialRecipes.map( (r,i) => <Col width={recipeColumns} key={i}> <Recipe key={i} recipe={r.recipe} missingIngredients={r.missing_ingredients[0]} /> </Col>)
    }

    return(
      <div>
        <Row>
          {recipesHTML}
        </Row>
      </div>
    )
  }
}

function mapStateToProps(state){
  return state.platform
}

export default withRouter(connect(mapStateToProps)(RecipesList))
