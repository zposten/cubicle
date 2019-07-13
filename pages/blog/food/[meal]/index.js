import React from 'react'
import {withRouter} from 'next/router'

import cards from 'content/cards'
import {BlogCardList} from 'components/blog'

function BlogMeal(props) {
  let mealCards = cards.food[props.query.meal]
  return <BlogCardList cards={mealCards} router={props.router} />
}

BlogMeal.getInitialProps = async ({query}) => ({query})

export default withRouter(BlogMeal)
