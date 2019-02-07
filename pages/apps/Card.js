import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {primary, secondary} from 'general/theme'
import {lighten} from 'polished'


const Wrapper = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-areas: ${props => props.flip ? '"text pic"' : '"pic text"'};
  grid-template-columns: auto 1fr;
  width: 100%;
  overflow: hidden;
  cursor: pointer;

  background-color: ${lighten(0.05, primary)};
  transition: 0.1s ease-in;

  &:hover {
    transform: translate(50px, -10px);
    background-color: ${lighten(0.1, primary)};
    ${'' /* box-shadow: -5px 5px 20px 2px ${lighten(0.2, primary)}; */}
  }
`

const ImageWrapper = styled.div`
  grid-area: pic;
  width: 100%;
  max-width: 300px;
  max-height: 300px;
  overflow: hidden;
  place-self: center;
`

const Image = styled.img`
  width: 100%;
`

const TextWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: auto 1fr;
  grid-gap: 20px;
  grid-template-areas: "title" "description";
  margin: auto;
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
    <Wrapper>
      <ImageWrapper>
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
}