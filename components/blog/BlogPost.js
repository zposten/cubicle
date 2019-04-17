import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

import {traverseObject} from 'general/util'
import cards from './cards'
import {Title, Card, CardColumn} from 'components'
import {PageLayout} from 'layout'
import {Markdown} from 'components/Markdown'

export function generateBlogPostDefinition(slug) {
  let path = slug.split('/')
  let blogId = path.pop()

  let definitionObject = traverseObject(cards, path)
  let siblings = definitionObject.default
  let blogPost = siblings.filter(sibling => sibling.id === blogId)[0]
  return {blogPost}
}

const BlogImage = styled.div`
  background-image: url('/static/${p => p.src}'), url('/static/code.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 400px;
  margin-bottom: 30px;

  ${breakpoint('sm')`
    width: 100%;
  `}

  ${breakpoint('md')`
    width: 66%;
  `}
`

export function BlogPost(props) {
  let {post} = props

  return (
    <PageLayout>
      <Title title={post.title} subtitle={post.description} />
      <BlogImage src={post.imageFilename} />
      <Markdown html={post.html} />
    </PageLayout>
  )
}

BlogPost.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    imageFilename: PropTypes.string,
    id: PropTypes.string,
    html: PropTypes.string,
  }),
}
