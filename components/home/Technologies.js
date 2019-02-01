import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

import {primary, secondary, secondaryDark} from '../../general/theme'


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

const BoldText = styled.div`
  font-family: 'Anton';
  margin-right: 10px;
  font-size: 1.3rem;
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
        software, program, tool, platform, data catcher
      </BuildBlock>
      <BuildBlock left={100}>
        <BoldText>BUILD WITH</BoldText>
        software, program, tool, platform, data catcher
      </BuildBlock>
      <BuildBlock left={200}>
        <BoldText>BUILD FOR</BoldText>
        software, program, tool, platform, data catcher
      </BuildBlock>
    </Blocks>
  </Wrapper>
)