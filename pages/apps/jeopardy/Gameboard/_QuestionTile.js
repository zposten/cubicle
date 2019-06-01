import React, {useState} from 'react'
import PropTypes from 'prop-types'
import styled, {css} from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import {lighten, darken} from 'polished'

// The keys of this object are the states that a game tile
// can be in, and the values of this object are the score
// multiplier that is applied to this tile's value when
// it is in that state.
let tileStates = {ready: 0, unanswered: 0, correct: 1, incorrect: -1}

export const jeopardyColor = 'rgb(23, 33, 117)'
export const jeopardyTextColor = 'rgb(244, 200, 71)'

const Wrapper = styled.div`
  padding: 10px 0px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  user-select: none;
  font-size: 15px;
  color: ${jeopardyTextColor};
  background-color: ${jeopardyColor};

  ${breakpoint('md')`
    padding-left: 10px;
    padding-right: 10px;
    font-size: 25px;
  `}

  &:hover {
    background-color: ${lighten(0.2, jeopardyColor)};
  }

  ${p =>
    p.state === 'unanswered' &&
    css`
      color: gray;
    `}

    ${p =>
      p.state === 'correct' &&
      css`
        color: white;
        background-color: green;
        &:hover {
          background-color: ${lighten(0.1, 'green')};
        }
      `}

    ${p =>
      p.state === 'incorrect' &&
      css`
        color: white;
        background-color: ${darken(0.1, 'red')};
        &:hover {
          background-color: ${lighten(0.1, 'red')};
        }
      `}
`

export function QuestionTile(props) {
  const [state, setState] = useState(Object.keys(tileStates)[0])
  const [score, setScore] = useState(0)

  function handleClick() {
    let states = Object.keys(tileStates)
    let index = states.indexOf(state)
    let newIndex = (index + 1) % states.length

    let newState = states[newIndex]
    setState(newState)

    let oldScore = score
    let newScore = props.value * tileStates[newState]
    props.setScore(oldScore, newScore, props.round)
    setScore(newScore)
  }

  return (
    <Wrapper onClick={handleClick} state={state}>
      ${props.value}
    </Wrapper>
  )
}

QuestionTile.propTypes = {
  value: PropTypes.number.isRequired,
  setScore: PropTypes.func.isRequired,
  round: PropTypes.number.isRequired,
}
