import React from 'react'
import Head from 'next/head'

import {BlogPost} from '@/sections/blog'
import * as recipesByMeal from 'content/recipes'

export default function BlogRecipe({recipe}) {
  return (
    <>
      <Head>{recipe && <title>{recipe.title}</title>}</Head>
      <BlogPost post={recipe} />
    </>
  )
}

export async function getStaticPaths() {
  let paths = []

  for (let mealName in recipesByMeal) {
    let recipesForMeal = recipesByMeal[mealName]
    let pathsForMeal = recipesForMeal.map(recipe => ({
      params: {meal: mealName, recipe: recipe.id},
    }))

    paths.push(...pathsForMeal)
  }

  return {paths, fallback: false}
}

export async function getStaticProps(context) {
  let mealName = context.params.meal
  let recipeId = context.params.recipe

  let recipesForMeal = mealName && recipesByMeal[mealName]
  let recipe =
    recipesForMeal &&
    recipeId &&
    recipesForMeal.filter(r => r.id === recipeId)[0]

  return {props: {recipe}}
}
