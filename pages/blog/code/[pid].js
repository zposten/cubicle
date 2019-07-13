import React from 'react'
import {withRouter} from 'next/router'

import cards from 'content/cards'
import {BlogPost} from 'components/blog'

function BlogCodePost(props) {
  let postId = props.query.pid
  let post = cards.code.filter(post => post.id === postId)[0]

  return <BlogPost post={post} />
}

BlogCodePost.getInitialProps = async ({query}) => ({query})

export default withRouter(BlogCodePost)
