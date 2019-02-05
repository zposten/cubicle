import {useState} from 'react'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

import {secondary, secondaryDark} from '../../general/theme'
import {GithubIcon} from '../../general/icons'



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
  transition: filter 0.5s;

  &.hover, &:hover {
    filter: drop-shadow(10px 10px 50px white);
  }

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
  font-family: Anton;
  line-height: normal;
  margin-bottom: 10px;
  font-size: 4em;

  &.hover, &:hover {
    animation: 
      neon-start 0.5s ease-in, 
      neon2 1.5s ease-in-out 0.5s infinite alternate;
  }

  @keyframes neon-start {
    from {
      text-shadow: none;
    }
    to {
      text-shadow: 
        0 0 10px #fff, 
        0 0 20px #fff,
        0 0 30px #fff,
        0 0 40px ${secondary},
        0 0 70px ${secondary},
        0 0 80px ${secondary},
        0 0 100px ${secondary},
        0 0 150px ${secondary};
    }
  }

  @keyframes neon2 {
    from {
      text-shadow: 
        0 0 10px #fff, 
        0 0 20px #fff,
        0 0 30px #fff,
        0 0 40px ${secondary},
        0 0 70px ${secondary},
        0 0 80px ${secondary},
        0 0 100px ${secondary},
        0 0 150px ${secondary};
    }
    to {
      text-shadow: 
        0 0 5px  #fff,
        0 0 10px #fff,
        0 0 15px #fff,
        0 0 20px ${secondary},
        0 0 35px ${secondary},
        0 0 40px ${secondary},
        0 0 50px ${secondary},
        0 0 75px ${secondary};
    }
  }
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

export function Jumbotron() {
  const [isHovered, setIsHovered] = useState(false)

  function onMouseEnter() {
    console.log('onMouseEnter')
    setIsHovered(true)
  }

  function onMouseLeave() {
    console.log('onMouseLeave')
    setIsHovered(false)
  }

  return (
    <DropShadow
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
    >
      <Wrapper
      >
        <Cube src='/static/cube.png' className={isHovered && 'hover'} />
        <Content>
          <BigText className={isHovered && 'hover'}>ZACH POSTEN</BigText>
          <Line />
          <SmallText>SOFTWARE ENGINEER</SmallText>
          <div>
            <GithubIcon />
          </div>
        </Content>
      </Wrapper>
    </DropShadow>
  )
}