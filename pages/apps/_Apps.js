import React from 'react'
import {withRouter} from 'next/router'

import {PageLayout} from 'layout'
import {Card, CardColumn, Title} from 'components'

export class Apps extends React.Component {
  render() {
    return (
      <PageLayout>
        <Title title="Apps" subtitle="Fun little bits of code" />
        <CardColumn>
          {/* <Card
            src="/static/images/calendar.jpg"
            title="Scheduler"
            id="scheduler"
            description={`A tool for any student at any university 
              to assist with choosing a class schedule`}
          /> */}
          <Card
            src="/static/images/jeopardy.jpg"
            title="Jeopardy Calculator"
            id="jeopardy"
            description={`A tool for keeping track of your score 
            while you watch Jeopardy!`}
          />
          {global.window && global.window.isCool && (
            <Card
              src="/static/images/mainframe.jpg"
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
}
