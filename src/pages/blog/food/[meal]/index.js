import React from 'react'
import {useRouter} from 'next/router'
import Head from 'next/head'

import cards from 'content/cards'
import {BlogCardList} from 'sections/blog'
import {capitalize} from 'general/util'

export default function BlogMeal(props) {
  const router = useRouter()
  let meal = router.query.meal
  let mealCards = meal && cards.food[meal]
  return (
    <>
      <Head>{meal && <title>{capitalize(meal)} recipes!</title>}</Head>
      <BlogCardList cards={mealCards} router={props.router} />
    </>
  )
}
