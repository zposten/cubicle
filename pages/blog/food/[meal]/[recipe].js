import React from 'react'
import {useRouter} from 'next/router'
import Head from 'next/head'

import cards from 'content/cards'
import {BlogPost} from 'sections/blog'

export default function BlogRecipe() {
  const router = useRouter()
  let recipeId = router.query.recipe
  let mealName = router.query.meal

  let recipesForMeal = mealName && cards.food[mealName]
  let recipe =
    recipesForMeal &&
    recipeId &&
    recipesForMeal.filter(r => r.id === recipeId)[0]

  return (
    <>
      <Head>{recipe && <title>{recipe.title}</title>}</Head>
      <BlogPost post={recipe} />
    </>
  )
}
