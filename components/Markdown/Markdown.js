import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {TextColumn} from 'components'
import {
  CodeStyles,
  InputStyles,
  ListStyles,
  OtherMarkdownStyles,
  TableStyles,
} from './style'

const Wrapper = styled.div`
  display: block;
  overflow: hidden;
  font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans,
    sans-serif;
  word-wrap: break-word;
  border-radius: 3px;
  padding: 20px;
  color: white;
  width: 100%;
  font-size: 1.2em;
  ${TextColumn}
`

export function Markdown(props) {
  // Format required by dangerouslySetInnerHTML
  let obj = {__html: props.html}

  return (
    <>
      <CodeStyles />
      <InputStyles />
      <ListStyles />
      <OtherMarkdownStyles />
      <TableStyles />
      <Wrapper dangerouslySetInnerHTML={obj} className="markdown" />
    </>
  )
}

Markdown.propTypes = {
  html: PropTypes.string.isRequired,
}
