import React from 'react'
import App from 'next/app'
import ReactGA from 'react-ga'

import {loadFonts} from 'general/fonts'

export default class MyApp extends App {
  render() {
    const {Component, pageProps} = this.props
    return <Component {...pageProps} />
  }

  componentDidMount() {
    ReactGA.initialize('UA-172430847-1')
    loadFonts()
  }
}
