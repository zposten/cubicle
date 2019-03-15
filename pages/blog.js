import React from 'react'
import styled from 'styled-components'

import {PageLayout, Title, Card, CardColumn} from 'components'

export default class Blog extends React.Component {
  render() {
    return (
      <PageLayout>
        <Title
          title="Blog"
          subtitle="My thoughts, views, and opinions on technical and non-technical matters"
        />
        <CardColumn />
      </PageLayout>
    )
  }
}
