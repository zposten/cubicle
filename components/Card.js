import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {primary, secondary} from 'general/theme'
import {lighten} from 'polished'
import TouchRipple from '@material-ui/core/ButtonBase/TouchRipple'
import ButtonBase from '@material-ui/core/ButtonBase'
import {Button} from '@material-ui/core'

const MyButtonBase = styled(ButtonBase)`
  font-size: inherit;
  border: 0;
`

const Wrapper = styled(MyButtonBase)`
  background-color: ${lighten(0.05, primary)} !important;
  display: grid !important;
  grid-template-columns: [pic] 1fr [text] 1fr;
  width: 100%;
  overflow: hidden;
  cursor: pointer;
  height: ${props => props.height || 'auto'};
  position: relative;
  border: 5px;
  max-width: 700px;
  height: 250px;

  transition: 0.1s ease-in;

  &:hover {
    transform: translate(10px, -10px);
    background-color: ${lighten(0.1, primary)};
    ${'' /* box-shadow: -5px 5px 20px 2px ${lighten(0.2, primary)}; */}
  }
`

const Image = styled.div`
  grid-column: pic;
  height: 100%;
  width: 100%;
  place-self: ${props => (props.flip ? 'end' : 'start')};
  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-size: cover;
`

const TextWrapper = styled.div`
  grid-column: text;
  display: grid;
  grid-template-rows: [title] auto [description] 1fr;
  grid-gap: 20px;
  margin: auto;
  margin-left: 30px;
  margin-right: 30px;
`

const Title = styled.h4`
  margin: 0;
  grid-row: title;
`

const Description = styled.p`
  margin: 0;
  grid-row: description;
`

export function Card(props) {
  return (
    <Wrapper height={props.height} component="div">
      <Image src={props.src} />
      <TextWrapper>
        <Title>{props.title}</Title>
        <Description>{props.description}</Description>
      </TextWrapper>
    </Wrapper>
  )
}

Card.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  height: PropTypes.string,
}

export const CardColumn = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > *:not(:last-child) {
    margin-bottom: 30px;
  }
`
