import React from 'react'
import styled from 'styled-components'
import fetch from 'isomorphic-unfetch'

import {Layout, Navigation} from '../components'
import {
  Jumbotron,
  MiniProfile,
  ProjectDisplay,
  Technologies,
  OtherInterests,
} from '../components/home'

export default class Index extends React.Component {

  static async getInitialProps() {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
    const data = await res.json()

    console.log('Fetched movies, count=', data.length)
    return {shows: data.map((d) => d.show)}
  }

  render() {
    return (
      <Layout>
        <Navigation />
        <Jumbotron />
        <MiniProfile />
        <ProjectDisplay />
        <Technologies />
        <OtherInterests />
      </Layout>
    )
  }
}

const Title = styled.h1`
  color: red;
`