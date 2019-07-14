import React from 'react'

import {Layout} from 'components/layout'
import {Navigation} from 'components'
import {
  MiniProfile,
  ProjectDisplay,
  Technologies,
  OtherInterests,
  Jumbotron,
} from 'sections/home'

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
