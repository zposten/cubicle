import React from 'react'

import {Layout} from 'layout'
import {Navigation} from 'components'
import {
  Jumbotron,
  MiniProfile,
  ProjectDisplay,
  Technologies,
  OtherInterests,
} from 'components/home'

export default class Index extends React.Component {
  render() {
    return (
      <Layout>
        <Navigation />
        <Jumbotron />
        <MiniProfile />
        <ProjectDisplay />
        <Technologies />
        <OtherInterests />
      </Layout>
    )
  }
}
