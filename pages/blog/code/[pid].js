import React from 'react'
import {withRouter} from 'next/router'

import cards from 'content/cards'
import {BlogPost} from 'components/blog'

function BlogCodePost(props) {
  let postId = props.router.query.pid
  let post = postId && cards.code.filter(post => post.id === postId)[0]
  return <BlogPost post={post} />
}

export default withRouter(BlogCodePost)
