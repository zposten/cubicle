import React from 'react'
import Head from 'next/head'

import {PageLayout} from 'components/layout'
import {Card, CardColumn, Title} from 'components'

export default function Apps(props) {
  return (
    <PageLayout>
      <Head>
        <title>Apps</title>
      </Head>
      <Title title="Apps" subtitle="Fun little bits of code" />
      <CardColumn>
        {/* <Card
            src={require('static/images/calendar.jpg')}
            title="Scheduler"
            id="scheduler"
            description={`A tool for any student at any university 
              to assist with choosing a class schedule`}
          /> */}
        <Card
          src={require('static/images/jeopardy.jpg')}
          title="Jeopardy Calculator"
          id="jeopardy"
          description={`A tool for keeping track of your score 
            while you watch Jeopardy!`}
        />
        {global.window && global.window.isCool && (
          <Card
            src={require('static/images/mainframe.jpg')}
            title="Google Mainframe Access"
            id="google"
            description={`Access to a portion of Google's 
            endless knowledge`}
          />
        )}
      </CardColumn>
    </PageLayout>
  )
}
