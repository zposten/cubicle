import React from 'react'
import styled from 'styled-components'

import {primary} from 'general/theme'
import {Layout, Navigation} from 'components'
import {Card} from '../components/Card'
import {Title} from 'components/Title'

const Wrapper = styled.div`
  position: relative;
  margin: 100px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Roboto, Arial;
`

const CardColumn = styled.div`
  width: 100%;
  max-width: 1000px;

  & > *:not(:last-child) {
    margin-bottom: 30px;
  }
`

const LittleCubes = styled.img`
  position: absolute;
  top: 50px;
  left: 20px;
  width: 250px;
`

export default class Index extends React.Component {
  render() {
    return (
      <Layout>
        <LittleCubes src="/static/little-cubes.png" />
        <Navigation />
        <Wrapper>
          <Title title="Apps" subtitle="Fun little bits of code" />

          <CardColumn>
            {[1, 2, 3, 4, 5, 6, 7].map(i => (
              <Card
                key={i}
                height="250px"
                src={`http://placekitten.com/${i * 150}/${i * 100}`}
                title="Zach is cool"
                flip={i % 2 == 0 ? true : false}
                description="This is really really really really realyyl aslkdf alskjd fowi flwfjwlij  cool"
              />
            ))}
          </CardColumn>
        </Wrapper>
      </Layout>
    )
  }
}
