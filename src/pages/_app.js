import React from 'react'
import App from 'next/app'
import ReactGA from 'react-ga'

import {loadFonts} from '@/general/fonts'

export default class MyApp extends App {
  constructor(props) {
    super(props)
    ReactGA.initialize('UA-172430847-1')
  }

  render() {
    const {Component, pageProps} = this.props
    return <Component {...pageProps} />
  }

  componentDidMount() {
    loadFonts()
  }
}
