import styled from 'styled-components'
import {secondary, secondaryDark} from '../../general/theme'

const DropShadow = styled.div`
  filter: drop-shadow(0px 10px 5px rgba(0,0,0,0.5));
`

const Wrapper = styled.div`
  height: 800px;
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
  width: 600px;
  position: relative;
`

const Content = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const BigText = styled.div`
  font-family: 'Anton';
  font-size: 3rem;
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