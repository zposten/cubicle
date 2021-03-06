import React from 'react'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

import {ProjectSummary} from './ProjectSummary'
import {TitleBlock} from '../TitleBlock'
import {Button} from '@/components'

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
  width: 200px;
  margin-top: 100px;
  margin-bottom: 100px;
`

export const ProjectDisplay = () => (
  <Wrapper>
    <TitleBlock>Work I've done</TitleBlock>
    <Summaries>
      <ProjectSummary
        src={require('public/static/images/glas.jpg')}
        title="GLAS by Johnson Controls"
        description={`
      I worked on developing the user interface, defining the architecture, 
      and implementing the cloud communications for Johnson Controls' first
      smart thermostat.  It was built in UWP on a Windows IoT core device.
    `}
      />
      <ProjectSummary
        src={require('public/static/images/nurse.png')}
        title="Nurse Management System for Eversana"
        description={`
      I developed the front end of a nurse management system that allows coordinators 
      to search for and manipulate nurse records through a variety of user friendly 
      mechanisms, including a custom Google Maps integration. It was built from the 
      ground up with React, Typescript, Redux, Webpack and Babel.
    `}
      />
      <ProjectSummary
        src={require('public/static/images/github.svg')}
        invert={true}
        title="Open source contributions"
        description={
          <div>
            I've done a considerable amount of open source work over the years.
            I have contributed to notable libraries including &nbsp;
            <a
              href="https://github.com/Azure/azure-iot-sdk-csharp"
              target="_blank"
            >
              Microsoft's C# Azure IoT SDK
            </a>
            , as well as the prominent &nbsp;
            <a
              href="https://github.com/zposten/DefinitelyTyped"
              target="_blank"
            >
              Definitely typed repo
            </a>
            . Additionally, I've published &nbsp;
            <a
              href="https://userstyles.org/styles/130371/google-calendar-dark-theme"
              target="_blank"
            >
              CSS themes
            </a>{' '}
            that have been &nbsp; downloaded thousands of times, as well as a
            &nbsp;
            <a href="https://github.com/zposten/catalyst" target="_blank">
              React/Typescript starter kit
            </a>
            .
          </div>
        }
      />
    </Summaries>

    <div>
      <a
        href="/static/zach-posten-resume.pdf"
        download
        tabIndex="-1"
        css={{textDecoration: 'none', outline: 'none'}}
      >
        <ResumeButton color="primary">View resume</ResumeButton>
      </a>
    </div>
  </Wrapper>
)
