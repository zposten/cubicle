import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {secondary} from 'general/theme'
import {TextColumn} from 'components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  ${TextColumn}
`

const BigText = styled.h1`
  font-family: Anton, Arial;
  color: ${secondary};
  text-transform: uppercase;
  margin: 0;
  font-size: 4em;
  text-align: center;
`

const SmallText = styled.h4`
  margin-top: 10px;
  font-weight: 300;
`

export function Title(props) {
  return (
    <Wrapper>
      <BigText>{props.title}</BigText>
      <SmallText>{props.subtitle}</SmallText>
    </Wrapper>
  )
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
}
