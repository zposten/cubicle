import React from 'react'
import {primary, secondary, secondaryDark} from './theme'

export const globalStyles = (
  <style global='true'>{`
    body { 
      margin: 0;
      background: ${primary};
      font-family: Roboto, Arial;
    }

    a {
      color: ${secondary};

      &:visited {
        color: ${secondaryDark};
      }
    }
  `}</style>
)