import React from 'react'

import {PageLayout} from 'layout'
import {Title, Card, CardColumn} from 'components'
import {handleCardClick} from 'components/blog'

export default function Blog(props) {
  return (
    <PageLayout>
      <Title title="Blog" />
      <CardColumn>
        <Card
          title="Programming"
          src="/static/images/code.png"
          description="Things I've learned while coding away"
          onClick={() => handleCardClick(props.url, 'code')}
        />
        <Card
          title="Recipes"
          src="/static/images/ingredients.jpg"
          description="Delicious concoctions that I hav personally vetted"
          onClick={() => handleCardClick(props.url, 'food')}
        />
      </CardColumn>
    </PageLayout>
  )
}
