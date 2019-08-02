import React from 'react'
import PropTypes from 'prop-types'
import styled, {css} from 'styled-components'

import {ripple} from './ripple'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  min-height: 50px;
  background: transparent;
  border: 2px solid ${p => p.theme.colors[p.zach || 'secondary']};
  color: white;
  transition: transform 0.25s ease;
  font-size: 1em;
  cursor: pointer;
  outline: none;
  position: relative;

  ${p => ripple(p.theme.colors[p.zach || 'secondary'])}

  ${p =>
    p.disabled &&
    css`
      opacity: 0.5;
      cursor: no-drop;
    `}
`

const Input = styled.input`
  visibility: hidden;
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
`

export function Button(props) {
  return (
    <Wrapper {...props} tabIndex="1">
      <Input
        type="button"
        disabled={props.isDisabled}
        onClick={props.onClick}
      />
      {props.children}
    </Wrapper>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  isDisabled: PropTypes.bool,
}
