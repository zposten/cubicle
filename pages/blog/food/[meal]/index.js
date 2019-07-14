import React from 'react'
import {withRouter} from 'next/router'

import cards from 'content/cards'
import {BlogCardList} from 'sections/blog'

function BlogMeal(props) {
  let meal = props.router.query.meal
  let mealCards = meal && cards.food[meal]
  return <BlogCardList cards={mealCards} router={props.router} />
}

export default withRouter(BlogMeal)
