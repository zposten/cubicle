import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

import {Layout} from './'
import {Navigation} from 'components'

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
  top: 5px;
  left: 5px;
  width: 100px;
  opacity: 0.5;

  ${breakpoint('md')`
    top: 20px;
    left: 10px;
    width: 150px;
    opacity: 1;
  `}

  ${breakpoint('lg')`
    top: 50px;
    left: 20px;
    width: 250px;
  `}
`

export function PageLayout(props) {
  return (
    <Layout>
      <LittleCubes src="/static/images/little-cubes.png" />
      <Navigation />
      <Wrapper>{props.children}</Wrapper>
    </Layout>
  )
}

PageLayout.propTypes = {
  children: PropTypes.node,
}
