import React from 'react'
import {useRouter} from 'next/router'
import Head from 'next/head'

import {Title} from '@/components'
import cards from 'content/cards'
import {BlogCardList} from '@/sections/blog'

export default function BlogCode() {
  const router = useRouter()
  let codeCards = cards.code
  return (
    <>
      <Head>
        <title>Programming by Zach</title>
      </Head>

      <BlogCardList cards={codeCards} router={router}>
        <Title
          title="Technology Blog"
          subtitle="Knowledge sharing to myself and maybe others!"
        />
      </BlogCardList>
    </>
  )
}
