import React from 'react'
import Ingredient from './Ingredient'
import { List, ListHeader } from 'react-onsenui'

const RecipesList = ({userIngredients, missingIngredients}) => {

  const userIngredientsHTML = userIngredients.map((ing,i) => <Ingredient key={i} ingredient={[ing.name]} />)
  const missingIngredientsHTML = missingIngredients.map((ing,i) => <Ingredient key={i} ingredient={ing} />)

  return(
    <List>
      <ListHeader style={{textAlign: 'center'}}>Your Ingredients:</ListHeader>
      {userIngredientsHTML}
      <ListHeader style={{textAlign: 'center'}}>Common Missing Ingredients:</ListHeader>
      {missingIngredientsHTML}
    </List>
  )
}

export default RecipesList
