import React from 'react'
import {withRouter} from 'next/router'

import {PageLayout} from 'components/layout'
import {Title, Card, CardColumn} from 'components'
import {handleCardClick} from 'sections/blog'

function Blog(props) {
  return (
    <PageLayout>
      <Title title="Blog" />
      <CardColumn>
        <Card
          title="Programming"
          src="/static/images/code.png"
          description="Things I've learned while coding away"
          onClick={() => handleCardClick(props.router, 'code')}
        />
        <Card
          title="Recipes"
          src="/static/images/ingredients.jpg"
          description="Delicious concoctions that I hav personally vetted"
          onClick={() => handleCardClick(props.router, 'food')}
        />
      </CardColumn>
    </PageLayout>
  )
}

export default withRouter(Blog)
