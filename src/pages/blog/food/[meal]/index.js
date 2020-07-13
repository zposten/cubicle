import React from 'react'
import Head from 'next/head'

import {Title} from '@/components'
import {BlogCardList} from '@/sections/blog'
import {capitalize} from '@/general/util'
import * as recipesByMeal from 'content/recipes'

export default function BlogMeal({meal, title}) {
  let mealCards = meal && recipesByMeal[meal]

  return (
    <>
      <Head>{meal && <title>{title}</title>}</Head>

      <BlogCardList cards={mealCards} showDate={false}>
        <Title title={title} subtitle="My favorite, time-tested recipes" />
      </BlogCardList>
    </>
  )
}

export async function getStaticPaths() {
  let paths = Object.keys(recipesByMeal).map(mealName => ({
    params: {meal: mealName},
  }))

  return {paths, fallback: false}
}

export async function getStaticProps(context) {
  let mealName = context.params.meal
  let title = `${capitalize(mealName)} recipes!`
  return {props: {meal: mealName, title}}
}
