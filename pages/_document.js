import React from 'react'
import Document, {Main, Head, NextScript} from 'next/document'
import {ServerStyleSheet} from 'styled-components'

import {CssFontSizes} from 'general/cssFontSizes'
import {GlobalStyles} from 'general/globalStyles'

export default class MyDocument extends Document {
  static getInitialProps({renderPage}) {
    // Step 1: Create an instance of ServerStyleSheet
    const sheet = new ServerStyleSheet()

    // Step 2: Retrieve styles from components in the page
    // while simultaneously injecting the global styles
    const page = renderPage(App => props =>
      sheet.collectStyles(
        <>
          <CssFontSizes />
          <GlobalStyles />
          <App {...props} />
        </>,
      ),
    )

    // Step 3: Extract the styles as <style> tags
    const styleTags = sheet.getStyleElement()

    // Step 4: Pass styleTags as a prop
    return {...page, styleTags}
  }

  render() {
    return (
      <html>
        {/* Step 5: Output the styles in the head  */}
        <Head>
          {this.props.styleTags}
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            href="https://fonts.googleapis.com/css?family=Anton"
            rel="stylesheet"
          />
          <link href="/static/qtcreator_dark.css" rel="stylesheet" />
          <link
            rel="icon"
            type="image/x-icon"
            href="/static/images/favicon.ico"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
