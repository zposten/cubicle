import styled from "styled-components"

const Wrapper = styled.div`
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: -20px;
  margin-bottom: 0;
  background-image: radial-gradient(circle, #67fcf1 20%, #4ca29f 80%);
  clip-path: polygon(
    0 0, /* left top */
    100% 0, /* right top */ 
    100% calc(100% - 6vw), /* right bottom */
    0 100% /* left bottom */
  );
`

const Cube = styled.img`
  width: 300px;
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
  <Wrapper>
    <Cube src='/static/cube.png' />
    <Content>
      <BigText>ZACH POSTEN</BigText>
      <Line />
      <SmallText>SOFTWARE ENGINEER</SmallText>
    </Content>

  </Wrapper>
)