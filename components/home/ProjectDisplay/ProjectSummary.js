import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 400px;
`

const ProjectImage = styled.img`
  border-radius: 50%;
  width: 200px;
`

const ProjectTitle = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 20px;
`

const ProjectDescription = styled.div`
  font-size: 1rem;
  text-align: center;
`

export const ProjectSummary = ({src, title, description}) => (
  <Wrapper>
    <ProjectImage src={src} />
    <ProjectTitle>{title}</ProjectTitle>
    <ProjectDescription>{description}</ProjectDescription>
  </Wrapper>
)