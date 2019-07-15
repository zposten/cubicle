import React, {useState} from 'react'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

const CategoryDisplay = styled.div`
  color: white;
  cursor: pointer;
`

const StyledInput = styled.input`
  max-width: 70%;
  ${breakpoint('md')`
    padding: 5px;
  `}
`

export function CategoryTile() {
  const [text, setText] = useState('')
  const [inEditMode, setInEditMode] = useState(true)

  return inEditMode ? (
    <StyledInput
      type="text"
      value={text}
      onChange={e => setText(e.target.value)}
      onBlur={() => setInEditMode(!text)}
      onFocus={e => e.target.select()}
    />
  ) : (
    <CategoryDisplay onClick={() => setInEditMode(true)}>
      {text}
    </CategoryDisplay>
  )
}
