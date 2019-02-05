import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

const Wrapper = styled.div`
  margin: 20px;
  display: grid;
  grid-template-rows: auto auto 1fr;
  justify-items: center;

  margin-top: 100px;
  width: 75%;

  &:first-child {
    margin-top: 20px;
  }

  ${breakpoint('md')`
    width: 50%;
  `}

  ${breakpoint('lg')`
    width: 400px;
    margin-top: 20px;
  `}
`

const ProjectImage = styled.img`
  border-radius: 50%;
  width: 80%;
  filter: ${props => props.invert ? 'invert(100%)' : null};

  ${breakpoint('lg')`
    width: 200px;
  `}
`

const ProjectTitle = styled.h3`
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;
  text-transform: uppercase;
`

const ProjectDescription = styled.div`
  text-align: left;

  ${breakpoint('lg')`
    text-align: justify;
  `}
`

export const ProjectSummary = ({src, title, description, invert}) => (
  <Wrapper>
    <ProjectImage src={src} invert={invert} />
    <ProjectTitle>{title}</ProjectTitle>
    <ProjectDescription>{description}</ProjectDescription>
  </Wrapper>
)

ProjectSummary.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.any,
  invert: PropTypes.bool,
}