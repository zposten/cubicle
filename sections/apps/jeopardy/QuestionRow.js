import React from 'react'
import PropTypes from 'prop-types'

import {QuestionTile} from './QuestionTile'

/**
 * This is a row that contains multiple cells, all of which
 * contain the same dollar value.  These cells represent
 * the questions for that value across all the categories
 */
export function QuestionRow(props) {
  let cols = []
  for (let i = 0; i < props.colCount; ++i) {
    let key = props.value + ' ' + i
    cols.push(
      <td key={key}>
        <QuestionTile {...props} />
      </td>,
    )
  }
  return <tr>{cols}</tr>
}

QuestionRow.propTypes = {
  value: PropTypes.number.isRequired,
  colCount: PropTypes.number.isRequired,
  setScore: PropTypes.func.isRequired,
  round: PropTypes.any.isRequired,
}
