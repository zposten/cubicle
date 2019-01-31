import * as React from 'react'
import {Grommet, Box} from 'grommet'

import {Header} from './Header'
import {theme} from './theme'
import {loadFonts} from '../general/fonts'

export class Layout extends React.Component {
  render() {
    return (
      <Grommet theme={theme}>
        <Box background='dark-1' fill={true}>
          <Header />
          {this.props.children}
        </Box>
      </Grommet>
    )
  }

  componentDidMount() {
    loadFonts()
  }
}