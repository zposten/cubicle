import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import {Button} from 'grommet'

import {ProjectSummary} from './ProjectSummary'
import {TitleBlock} from '../TitleBlock'

const Wrapper = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Summaries = styled.div`
  width: 100%;
  display: flex;

  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  ${breakpoint('lg')`
    flex-direction: row;
  `}
`

const ResumeButton = styled(Button)`
  align-items: center;
  width: 300px;
  margin-top: 100px;
  margin-bottom: 100px;
`

export const ProjectDisplay = () => (
  <Wrapper>
    <TitleBlock>Work I've done</TitleBlock>
    <Summaries>
      <ProjectSummary 
        src='/static/zach.jpg'
        title='GLAS BY JOHNSON CONTROLS'
        description={`
          I worked on the planning and development 
          team of JCI's first smart thermostat.  It was 
          built in UWP on a Windows IoT core device.
        `}
      />
      <ProjectSummary 
        src='/static/zach.jpg'
        title='GLAS BY JOHNSON CONTROLS'
        description={`
          I worked on the planning and development 
          team of JCI's first smart thermostat.  It was 
          built in UWP on a Windows IoT core device.
        `}
      />
      <ProjectSummary 
        src='/static/zach.jpg'
        title='GLAS BY JOHNSON CONTROLS'
        description={`
          I worked on the planning and development 
          team of JCI's first smart thermostat.  It was 
          built in UWP on a Windows IoT core device.
        `}
      />
    </Summaries>
    <ResumeButton color='primary' label='View resume' />
  </Wrapper>
)