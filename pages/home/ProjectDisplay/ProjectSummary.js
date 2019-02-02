import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

const Wrapper = styled.div`
  margin: 20px;
  display: grid;
  grid-template-rows: 200px auto auto;
  justify-items: center;

  margin-top: 50px;

  ${breakpoint('md')`
    max-width: 66%;
  `}

  ${breakpoint('lg')`
    max-width: 400px;
    margin-top: 20px;
  `}
`

const ProjectImage = styled.img`
  border-radius: 50%;
  width: 200px;
`

const ProjectTitle = styled.h3`
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;
  text-transform: uppercase;
`

const ProjectDescription = styled.p`
  text-align: justify;
`

export const ProjectSummary = ({src, title, description}) => (
  <Wrapper>
    <ProjectImage src={src} />
    <ProjectTitle>{title}</ProjectTitle>
    <ProjectDescription>{description}</ProjectDescription>
  </Wrapper>
)