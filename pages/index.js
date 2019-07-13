import React from 'react'

import {Layout} from 'layout'
import {Navigation, Jumbotron} from 'components'
import {
  MiniProfile,
  ProjectDisplay,
  Technologies,
  OtherInterests,
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
