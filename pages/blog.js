import React from 'react'
import ErrorPage from 'next/error'

import {traverseObject} from 'general/util'
import cards from 'content/cards'
import {BlogCardList} from 'components/blog/BlogCardList'
import {BlogPost, generateBlogPostDefinition} from 'components/blog/BlogPost'

export default class Blog extends React.Component {
  static async getInitialProps({query}) {
    const slug = query.slug
    const path = slug && slug.split('/')
    let cardDefinitions = path ? traverseObject(cards, path) : cards

    if (cardDefinitions) {
      // There are cards for this level
      return {cards: cardDefinitions.default}
    } else {
      // This level is a blog page or it doesn't exist
      return generateBlogPostDefinition(slug)
    }
  }

  render() {
    let {cards, blogPost} = this.props

    if (cards) return <BlogCardList cards={cards} url={this.props.url} />
    if (blogPost) return <BlogPost post={blogPost} />
    return <ErrorPage statusCode={404} />
  }
}

Blog.propTypes = {
  ...BlogCardList.propTypes,
  ...BlogPost.propTypes,
}
