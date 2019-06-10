import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

export const Column = styled.div`
  width: 100%;
  ${breakpoint('md')`width: 80%;`}
  ${breakpoint('lg')`width: 50%;`}
`