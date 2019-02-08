import React from 'react'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

import {primary, secondary, secondaryDark} from 'general/theme'


const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background-image: linear-gradient(${secondary}, ${secondaryDark});
  height: 500px;
`

const Blocks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`

const BoldText = styled.h4`
  font-family: Anton, Arial;
  margin-right: 10px;
  font-weight: 500;
`

const BuildBlock = styled.div`
  margin: 20px;
  background: ${primary};
  display: flex;
  padding: 10px;
  height: 40px;
  width: 80%;
  max-width: 700px;
  align-items: center;

  ${breakpoint('lg')`
    margin-left: ${props => props.left + 20 || 20}px;
  `}
`

export const Technologies = () => (
  <Wrapper>
    <Blocks>
      <BuildBlock>
        <BoldText>BUILD IN</BoldText>
        JavaScript, TypeScript, C#, Java
      </BuildBlock>
      <BuildBlock left={100}>
        <BoldText>BUILD WITH</BoldText>
        React, Angular, Redux, Webpack, Babel, .NET, UWP
      </BuildBlock>
      <BuildBlock left={200}>
        <BoldText>BUILD FOR</BoldText>
        web, Node, Windows, IoT, Mac, mobile
      </BuildBlock>
    </Blocks>
  </Wrapper>
)