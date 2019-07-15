import React from 'react'
import PropTypes from 'prop-types'

import {CategoryTile} from './CategoryTile'
import {jeopardyColor} from './QuestionTile'

export function CategoryRow(props) {
  let cols = []
  for (let i = 0; i < props.colCount; ++i) {
    cols.push(
      <th key={i} style={{backgroundColor: jeopardyColor}}>
        <CategoryTile {...props} />
      </th>,
    )
  }
  return <tr>{cols}</tr>
}

CategoryRow.propTypes = {
  colCount: PropTypes.number,
}
