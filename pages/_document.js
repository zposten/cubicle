import Document, {Main, Head, NextScript} from 'next/document'
import {ServerStyleSheet} from 'styled-components'

import {cssFontSizes} from 'general/cssFontSizes'
import {GlobalStyles} from 'general/GlobalStyles'

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    // Step 1: Create an instance of ServerStyleSheet
    const sheet = new ServerStyleSheet();

    // Step 2: Retrieve styles from components in the page
    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />),
    );

    // Step 3: Extract the styles as <style> tags
    const styleTags = sheet.getStyleElement();

    // Step 4: Pass styleTags as a prop
    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        {/* Step 5: Output the styles in the head  */}
        <Head>
          {this.props.styleTags}
          {cssFontSizes}
          <GlobalStyles global='true' />
          <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}