import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

import {secondary, secondaryDark} from '../../general/theme'

const DropShadow = styled.div`
  filter: drop-shadow(0px 10px 5px rgba(0,0,0,0.5));
`

const Wrapper = styled.div`
  height: 800px;
  max-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-image: radial-gradient(circle, ${secondary} 20%, ${secondaryDark} 80%);
  clip-path: polygon(
    0 0, /* left top */
    100% 0, /* right top */ 
    100% calc(100% - 6vw), /* right bottom */
    0 100% /* left bottom */
  );
  box-shadow: 20px 20px;
`

const Cube = styled.img`
  max-width: 600px;
  width: 90vw;
  position: relative;

  ${breakpoint('sm')`
    width: 66vw;
  `}
`

const Content = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const BigText = styled.h1`
  font-family: 'Anton';
  line-height: normal;
  margin-bottom: 10px;
`

const Line = styled.div`
  height: 2px;
  width: 100px;
  background: white;
`

const SmallText = styled.div`
  line-height: normal;
  margin-top: 20px;
`

export const Jumbotron = () => (
  <DropShadow>
    <Wrapper>
      <Cube src='/static/cube.png' />
      <Content>
        <BigText>ZACH POSTEN</BigText>
        <Line />
        <SmallText>SOFTWARE ENGINEER</SmallText>
      </Content>
    </Wrapper>
  </DropShadow>
)