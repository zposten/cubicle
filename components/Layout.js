import * as React from 'react'
import {Grommet, Box} from 'grommet'
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint'

import {theme} from '../general/theme'
import {loadFonts} from '../general/fonts'

const Base = styled(Box)`
  position: relative;
  line-height: normal;
`

export class Layout extends React.Component {
  render() {
    return (
      <Grommet theme={theme}>
        <Base background='dark-1' fill={true} id='page'>
          {this.props.children}
        </Base>
      </Grommet>
    )
  }

  componentDidMount() {
    loadFonts()
  }
}