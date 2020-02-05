import React from 'react'
import {useRouter} from 'next/router'
import Head from 'next/head'

import {Title} from 'components'
import cards from 'content/cards'
import {BlogCardList} from 'sections/blog'
import {capitalize} from 'general/util'

export default function BlogMeal(props) {
  const router = useRouter()
  let meal = router.query.meal
  let mealCards = meal && cards.food[meal]
  let title = `${capitalize(meal)} recipes!`

  return (
    <>
      <Head>{meal && <title>{title}</title>}</Head>

      <BlogCardList cards={mealCards} router={props.router}>
        <Title title={title} subtitle="My favorite, time-tested recipes" />
      </BlogCardList>
    </>
  )
}
