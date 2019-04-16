import React from 'react'
import PropTypes from 'prop-types'
import {Grommet, Box} from 'grommet'
import styled from 'styled-components'

import {theme} from 'general/theme'
import {loadFonts} from 'general/fonts'

const Base = styled(Box)`
  position: relative;
  line-height: normal;
`

export class Layout extends React.Component {
  render() {
    return (
      <Grommet theme={theme}>
        <Base background="dark-1" fill={true} id="page">
          {this.props.children}
        </Base>
      </Grommet>
    )
  }

  componentDidMount() {
    loadFonts()
  }
}

Layout.propTypes = {
  children: PropTypes.any.isRequired,
}
