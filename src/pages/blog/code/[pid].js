import React from 'react'
import Head from 'next/head'

import posts from 'content/posts'
import {BlogPost} from 'sections/blog'

export default function BlogCodePost({post}) {
  return (
    <>
      <Head>{post && <title>{post.title}</title>}</Head>
      <BlogPost post={post} />
    </>
  )
}

export async function getStaticPaths() {
  let paths = posts.map(post => ({params: {pid: post.id}}))
  return {paths, fallback: false}
}

export async function getStaticProps(context) {
  let postId = context.params.pid
  let post = postId && posts.filter(post => post.id === postId)[0]
  return {props: {post}}
}
