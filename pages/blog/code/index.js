import React from 'react'
import {withRouter} from 'next/router'

import cards from 'content/cards'
import {BlogCardList} from 'components/blog'

function BlogCode(props) {
  let codeCards = cards.code
  return <BlogCardList cards={codeCards} router={props.router} />
}

export default withRouter(BlogCode)
