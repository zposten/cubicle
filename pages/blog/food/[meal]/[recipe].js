import React from 'react'
import {withRouter} from 'next/router'

import cards from 'content/cards'
import {BlogPost} from 'sections/blog'

function BlogRecipe(props) {
  let query = props.router.query
  let recipeId = query.recipe
  let mealName = query.meal

  let recipesForMeal = mealName && cards.food[mealName]
  let recipe =
    recipesForMeal &&
    recipeId &&
    recipesForMeal.filter(r => r.id === recipeId)[0]

  return <BlogPost post={recipe} />
}

export default withRouter(BlogRecipe)
