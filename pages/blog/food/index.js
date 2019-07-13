import React from 'react'

import {PageLayout} from 'layout'
import {Title, Card, CardColumn} from 'components'
import {handleCardClick} from '../../../components/blog/BlogCardList'

export default function BlogFoodTypes(props) {
  return (
    <PageLayout>
      <Title
        title="Recipes"
        subtitle="Delicious concoctions that I have personally vetted"
      />
      <CardColumn>
        <Card
          title="Breakfast"
          src="/static/images/breakfast.jpg"
          description="The most important meal of the day"
          onClick={() => handleCardClick(props.url, 'breakfast')}
        />
        <Card
          title="Not Breakfast"
          src="/static/images/dinner.jpg"
          description="The meal that you just can't wait to get home for"
          onClick={() => handleCardClick(props.url, 'dinner')}
        />
        <Card
          title="Sides"
          src="/static/images/sides2.jpg"
          description="The meal that's not a meal...unless you really want it to be"
          onClick={() => handleCardClick(props.url, 'sides')}
        />
      </CardColumn>
    </PageLayout>
  )
}
