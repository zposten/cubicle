import {css} from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

export const TextColumn = css`
  max-width: 900px;

  ${breakpoint('md')`
    width: 66%;
  `}
`
