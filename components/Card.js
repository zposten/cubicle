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
  grid-template-areas: ${props => (props.flip ? '"text pic"' : '"pic text"')};
  grid-template-columns: ${props => (props.flip ? '1fr auto' : 'auto 1fr')};
  width: 100%;
  overflow: hidden;
  cursor: pointer;
  height: ${props => props.height || 'auto'};
  position: relative;
  border: 5px;

  transition: 0.1s ease-in;

  &:hover {
    transform: translate(10px, -10px);
    background-color: ${lighten(0.1, primary)};
    ${'' /* box-shadow: -5px 5px 20px 2px ${lighten(0.2, primary)}; */}
  }
`

const ImageWrapper = styled.div`
  grid-area: pic;
  /* width: 100%; */
  /* max-width: 300px; */
  height: 100%;
  /* overflow: hidden; */
  place-self: ${props => (props.flip ? 'end' : 'start')};
`

const Image = styled.div`
  height: 100%;
  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  width: 300px;
`

const TextWrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  grid-gap: 20px;
  grid-template-areas: 'title' 'description';
  margin: auto;
  margin-left: 30px;
`

const Title = styled.h3`
  margin: 0;
  grid-area: title;
`

const Description = styled.p`
  margin: 0;
  grid-area: description;
`

export function Card(props) {
  return (
    <Wrapper flip={props.flip} height={props.height} component="div">
      <ImageWrapper flip={props.flip}>
        <Image src={props.src} />
      </ImageWrapper>
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
  flip: PropTypes.bool,
  height: PropTypes.string,
}
