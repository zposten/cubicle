import React from 'react'
import {useRouter} from 'next/router'
import Head from 'next/head'

import {PageLayout} from 'components/layout'
import {Title, Card, CardColumn} from 'components'
import {handleCardClick} from 'sections/blog'

export default function Blog() {
  const router = useRouter()

  return (
    <PageLayout>
      <Head>
        <title>Blog</title>
      </Head>
      <Title title="Blog" />
      <CardColumn>
        <Card
          title="Technology"
          src="/static/images/code.png"
          description="Things I've learned while coding away"
          onClick={() => handleCardClick(router, 'code')}
        />
        <Card
          title="Recipes"
          src="/static/images/ingredients.jpg"
          description="Delicious concoctions that I hav personally vetted"
          onClick={() => handleCardClick(router, 'food')}
        />
      </CardColumn>
    </PageLayout>
  )
}
