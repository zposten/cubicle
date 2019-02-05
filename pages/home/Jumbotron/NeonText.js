import styled, {css} from 'styled-components'
import {secondary} from '../../../general/theme'

const startShadow = css`
  text-shadow: 
    0 0 10px #fff, 
    0 0 20px #fff,
    0 0 30px #fff,
    0 0 40px ${secondary},
    0 0 70px ${secondary},
    0 0 80px ${secondary},
    0 0 100px ${secondary},
    0 0 150px ${secondary};
`

export const NeonText = styled.h1`
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
    from {text-shadow: none;}
    to {${startShadow}}
  }

  @keyframes neon2 {
    from {${startShadow}}
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