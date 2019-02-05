import {createGlobalStyle} from 'styled-components'
import {primary, secondary, secondaryDark} from './theme'


export const GlobalStyles = createGlobalStyle`
  body { 
    margin: 0;
    background: ${primary};
  }

  a {
    color: ${secondary};

    &:visited {
      color: ${secondaryDark};
    }
  }
`