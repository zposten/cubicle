import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

import {Title} from 'components'
import {PageLayout} from 'components/layout'
import {Markdown} from 'components/Markdown'

const BlogImage = styled.div`
  background-image: url(${p => require('static/images/' + p.src)}),
    url(${p => require('static/images/code.png')});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 400px;
  margin-bottom: 30px;
  max-width: 900px;

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
      {post && (
        <>
          <Title title={post.title} subtitle={post.description} />
          <BlogImage src={post.imageFilename} />
          <Markdown html={post.html} />
        </>
      )}
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
