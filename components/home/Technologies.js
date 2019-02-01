import styled from 'styled-components'
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
`

const BoldText = styled.div`
  font-family: 'Anton';
  margin-right: 10px;
  font-size: 1.3rem;
`

const BuildBlock = styled.div`
  margin: 10px;
  background: ${primary};
  margin-left: ${props => props.left + 20 || 20}px;
  display: flex;
  padding: 10px;
  height: 40px;
  width: 700px;
  align-items: center;
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