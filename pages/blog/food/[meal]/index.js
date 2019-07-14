import React from 'react'
import {useRouter} from 'next/router'

import cards from 'content/cards'
import {BlogCardList} from 'sections/blog'

export default function BlogMeal(props) {
  const router = useRouter()
  let meal = router.query.meal
  let mealCards = meal && cards.food[meal]
  return <BlogCardList cards={mealCards} router={props.router} />
}
