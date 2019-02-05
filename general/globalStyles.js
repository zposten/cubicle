import {primary, secondary, secondaryDark} from '../general/theme'

export const globalStyles = (
  <style global='true'>{`
  body { 
    margin: 0;
    background: ${primary};
  }

  a {
    color: ${secondary};
  }

  a:visited {
    color: ${secondaryDark}
  }
  `}</style>
)