import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {primary} from 'general/theme'
import {Layout, Navigation, Card, CardColumn, Title} from 'components'

const Wrapper = styled.div`
  position: relative;
  margin: 100px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Roboto, Arial;
`

const LittleCubes = styled.img`
  position: absolute;
  top: 50px;
  left: 20px;
  width: 250px;
`

export function PageLayout(props) {
  return (
    <Layout>
      <LittleCubes src="/static/little-cubes.png" />
      <Navigation />
      <Wrapper>{props.children}</Wrapper>
    </Layout>
  )
}

PageLayout.propTypes = {
  children: PropTypes.node,
}
