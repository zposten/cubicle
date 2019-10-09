import React, {useState} from 'react'
import PropTypes from 'prop-types'
import styled, {css} from 'styled-components'
import {rgba} from 'polished'

const totalHeight = 56

const Wrapper = styled.div`
  width: 200px;
  height: ${totalHeight + 'px'};
  border-radius: 5px;
  position: relative;
  background-color: ${rgba('white', 0.3)};
  transition: 0.3s all;
  padding: 0;

  ${p => p.fullWidth && {width: '100%'}}

  ${p =>
    p.isDisabled &&
    css`
      background-color: ${rgba('white', 0.05)};
    `}

  &:hover {
    ${p =>
      !p.isDisabled &&
      css`
        background-color: ${rgba('white', 0.5)};
        box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.05);
      `}
  }
`

const Input = styled.input`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border-radius: 10px;
  background: transparent;
  color: white;
  outline: none;
  font-size: 1em;
  border: none;
  padding: 10px 5px 0 10px;

  ${p => p.disabled && {opacity: 0.5}}

  /* Style the Label component below, but only do so 
   * when the text box is has text in it */
  &:focus,
  &:focus-within,
  &.filled {
    & + label {
      font-size: 12px;
      top: 5px;
      opacity: 0.7;
    }
  }
`

const labelHeight = 20
const Label = styled.label`
  position: absolute;
  height: ${labelHeight}px;
  top: ${(totalHeight - labelHeight) / 2}px;
  left: 10px;
  transition: all 0.5s;
  pointer-events: none;
`

export function Textbox(props) {
  const [text, setText] = useState('')
  const {id, value, isDisabled, ...rest} = props

  // If one of these has a value and the other doesn't
  // make sure that text gets set to value so that they
  // are again the same.
  if (!!value !== !!text) setText(value)

  return (
    <Wrapper {...rest} id={id} isDisabled={isDisabled}>
      <Input
        ref={props.inputRef}
        type="text"
        className={text && 'filled'}
        onChange={e => setText(e.target.value)}
        value={value}
        disabled={isDisabled}
      />
      <Label htmlFor={id}>{props.label}</Label>
    </Wrapper>
  )
}

Textbox.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  isDisabled: PropTypes.bool,
  inputRef: PropTypes.any,
}
