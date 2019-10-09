import React from 'react'
import Head from 'next/head'

import {Layout} from 'components/layout'
import {Navigation} from 'components'
import {
  MiniProfile,
  ProjectDisplay,
  Technologies,
  OtherInterests,
  Jumbotron,
  DesignCredit,
} from 'sections/home'

export default class Index extends React.Component {
  render() {
    return (
      <Layout>
        <Head>
          <title>Zach Posten</title>
        </Head>
        <Navigation />
        <Jumbotron />
        <MiniProfile />
        <ProjectDisplay />
        <Technologies />
        <OtherInterests />
        <DesignCredit />
      </Layout>
    )
  }
}
