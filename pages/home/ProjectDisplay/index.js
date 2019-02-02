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
    align-items: flex-start;
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
        src='/static/glas.jpg'
        title='GLAS by Johnson Controls'
        description={`
          I worked on developing the user interface, defining the architecture, 
          and implementing the cloud communications for Johnson Controls' first
          smart thermostat.  It was built in UWP on a Windows IoT core device.
        `}
      />
      <ProjectSummary 
        src='/static/nurse.png'
        title='Nurse Management System for Eversana'
        description={`
          I developed the front end of a nurse management system that allows coordinators 
          to search for and manipulate nurse records through a variety of user friendly 
          mechanisms, including a custom Google Maps integration. It was built from the 
          ground up with React, Typescript, Redux, Webpack and Babel.
        `}
      />
      <ProjectSummary 
        src='/static/zach.jpg'
        title='Songbridge'
        description={`
          For my senior design project at MSOE, myself and a team of four others
          created a music voting Google Chromecast application with a companion
          mobile app.
        `}
      />
    </Summaries>
    <ResumeButton color='primary' label='View resume' />
  </Wrapper>
)