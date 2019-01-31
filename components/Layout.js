import * as React from 'react'
import {Grommet, Box} from 'grommet'

import {theme} from '../general/theme'
import {loadFonts} from '../general/fonts'
import styled from 'styled-components';

const Base = styled(Box)`
  padding: 20px;
  position: relative;
`

export class Layout extends React.Component {
  render() {
    return (
      <Grommet theme={theme}>
        <Base background='dark-1' fill={true}>
          {this.props.children}
        </Base>
      </Grommet>
    )
  }

  componentDidMount() {
    loadFonts()
  }
}