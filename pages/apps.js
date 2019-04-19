import React from 'react'

import {PageLayout} from 'layout'
import {Card, CardColumn, Title} from 'components'

export default class Apps extends React.Component {
  render() {
    return (
      <PageLayout>
        <Title title="Apps" subtitle="Fun little bits of code" />
        <CardColumn>
          <Card
            src="/static/images/calendar.jpg"
            title="Scheduler"
            description={`A tool for any student at any university 
              to assist with choosing a class schedule`}
          />
          <Card
            src="/static/images/jeopardy.jpg"
            title="Jeopardy Calculator"
            description={`A tool for keeping track of your score 
            while you watch Jeopardy!`}
          />
          <Card
            src="/static/images/mainframe.jpg"
            title="Google Mainframe Access"
            description={`Access to a portion of Google's 
            endless knowledge`}
          />
        </CardColumn>
      </PageLayout>
    )
  }
}
