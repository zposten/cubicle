import {primary, secondary, secondaryDark} from './theme'
import {createGlobalStyle} from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  body { 
    margin: 0;
    background: ${primary};
    font-family: Roboto, Arial;
    color: white;
  }

  a {
    color: ${secondary};

    &:visited {
      color: ${secondaryDark};
    }
  }
`
