import React from 'react'
import styled from 'styled-components'

import {primary} from 'general/theme'
import {Layout, Navigation} from 'components'
import {Card} from './apps/Card'
import {Title} from 'components/Title'

const Wrapper = styled.div`
  margin: 100px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const CardColumn = styled.div`
  width: 100%;
  max-width: 1000px;

  & > *:not(:last-child) {
    margin-bottom: 30px;
  }
`

export default class Index extends React.Component {
  render() {
    return (
      <Layout>
        <Navigation />
        <Wrapper>
          <Title
            title='Apps'
            subtitle='Fun little bits of code'
          />

          <CardColumn>
            {
              [1, 2, 3, 4, 5, 6, 7].map(i => (
                <Card
                  key={i}
                  src='/static/zach.jpg'
                  title='Zach is cool'
                  description='This is really really really really realyyl aslkdf alskjd fowi flwfjwlij  cool'
                />
              ))
            }
          </CardColumn>
        </Wrapper>
      </Layout>
    )
  }
}