import React from 'react'
import PropTypes from 'prop-types'
import {ThemeProvider} from 'styled-components'

import {theme} from 'general/theme'
import {loadFonts} from 'general/fonts'

export class Layout extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <>{this.props.children}</>
      </ThemeProvider>
    )
  }

  componentDidMount() {
    loadFonts()
  }
}

Layout.propTypes = {
  children: PropTypes.any.isRequired,
}
