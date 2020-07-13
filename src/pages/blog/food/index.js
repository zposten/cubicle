import React from 'react'
import {useRouter} from 'next/router'
import Head from 'next/head'

import {PageLayout} from '@/components/layout'
import {Title, Card, CardColumn} from '@/components'
import {handleCardClick} from '@/sections/blog'

export default function BlogMeals() {
  const router = useRouter()

  return (
    <PageLayout>
      <Head>
        <title>Zach's Recipes!</title>
      </Head>
      <Title
        title="Recipes"
        subtitle="Delicious concoctions that I have personally vetted"
      />
      <CardColumn>
        <Card
          title="Breakfast"
          src={require('public/static/images/breakfast.jpg')}
          description="The most important meal of the day"
          onClick={() => handleCardClick(router, 'breakfast')}
        />
        <Card
          title="Not Breakfast"
          src={require('public/static/images/dinner.jpg')}
          description="The meal that you just can't wait to get home for"
          onClick={() => handleCardClick(router, 'dinner')}
        />
        <Card
          title="Sides"
          src={require('public/static/images/sides2.jpg')}
          description="The meal that's not a meal...unless you really want it to be"
          onClick={() => handleCardClick(router, 'sides')}
        />
      </CardColumn>
    </PageLayout>
  )
}
