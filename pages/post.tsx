import React from 'react'
import fetch from 'isomorphic-unfetch'

import {Layout} from '../components/Layout'
import {IShow} from '../models/IShow'
import {NextContext} from 'next'

export type PageProps = {
  show: IShow,
}

export default class Page extends React.Component<PageProps, {}> {
  static async getInitialProps(context: NextContext) {
    const {id} = context.query
    const res = await fetch('https://api.tvmaze.com/shows/' + id)

    const show = await res.json()
    console.log('Fetched show: ', show.name)

    return {show}
  }

  render() {
    return (
      <Layout>
        <h1>{this.props.show.name}</h1>
        <p>{this.props.show.summary.replace(/<[/]?p>/g, '')}</p>
        <img src={this.props.show.image.medium} />
      </Layout>
    )
  }
}