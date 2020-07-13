import React from 'react'
import PropTypes from 'prop-types'
import {ThemeProvider} from 'styled-components'
import ReactGA from 'react-ga'

import {theme} from '@/general/theme'

export class Layout extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <>{this.props.children}</>
      </ThemeProvider>
    )
  }

  componentDidMount() {
    ReactGA.pageview(window.location.pathname + window.location.search)
  }
}

Layout.propTypes = {
  children: PropTypes.any.isRequired,
}
