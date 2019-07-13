import React from 'react'
import {withRouter} from 'next/router'

import cards from 'content/cards'
import {BlogPost} from 'components/blog'

function BlogRecipe(props) {
  let recipeId = props.query.recipe
  let recipesForMeal = cards.food[props.query.meal]
  let recipe = recipesForMeal.filter(r => r.id === recipeId)[0]

  return <BlogPost post={recipe} />
}

BlogRecipe.getInitialProps = async ({query}) => ({query})

export default withRouter(BlogRecipe)
