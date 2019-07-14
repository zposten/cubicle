import React from 'react'
import {useRouter} from 'next/router'

import cards from 'content/cards'
import {BlogCardList} from 'sections/blog'

export default function BlogCode() {
  const router = useRouter()
  let codeCards = cards.code
  return <BlogCardList cards={codeCards} router={router} />
}
