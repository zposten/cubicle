import React from 'react'
import {useRouter} from 'next/router'

import cards from 'content/cards'
import {BlogPost} from 'sections/blog'

export default function BlogCodePost() {
  const router = useRouter()
  let postId = router.query.pid
  let post = postId && cards.code.filter(post => post.id === postId)[0]
  return <BlogPost post={post} />
}
