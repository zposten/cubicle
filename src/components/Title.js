import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {secondary} from '@/general/theme'
import {TextColumn} from './TextColumn'

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

const Date = styled.div`
  font-size: 15px;
  display: flex;
  justify-content: flex-end;
  font-weight: bold;
  opacity: 0.6;
  width: 100%;
  padding: 10px 0;
`

export function Title(props) {
  const {title, subtitle, date} = props

  return (
    <Wrapper>
      <BigText>{title}</BigText>
      {date && <Date>{date}</Date>}
      <SmallText>{subtitle}</SmallText>
    </Wrapper>
  )
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  date: PropTypes.string,
}
