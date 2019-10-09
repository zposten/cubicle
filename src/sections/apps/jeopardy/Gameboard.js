import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {CategoryRow} from './CategoryRow'
import {QuestionRow} from './QuestionRow'

const Table = styled.table`
  width: 100%;
  table-layout: fixed;
`

export function Gameboard(props) {
  return (
    <Table>
      <thead>
        <CategoryRow colCount={props.colCount} />
      </thead>
      <tbody>
        {props.values.map(value => (
          <QuestionRow
            key={value}
            value={value}
            colCount={props.colCount}
            setScore={props.setScore}
            round={props.round}
          />
        ))}
      </tbody>
    </Table>
  )
}

Gameboard.propTypes = {
  values: PropTypes.arrayOf(PropTypes.number).isRequired,
  colCount: PropTypes.number.isRequired,
  setScore: PropTypes.func.isRequired,
  round: PropTypes.any.isRequired,
}
