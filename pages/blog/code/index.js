import React from 'react'
import {useRouter} from 'next/router'
import Head from 'next/head'

import cards from 'content/cards'
import {BlogCardList} from 'sections/blog'

export default function BlogCode() {
  const router = useRouter()
  let codeCards = cards.code
  return (
    <>
      <Head>
        <title>Programming by Zach</title>
      </Head>
      <BlogCardList cards={codeCards} router={router} />
    </>
  )
}
