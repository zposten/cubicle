import Link from 'next/link'
import styled from 'styled-components'
import {Layout} from '../components/Layout'

const PostLink = (props) => (
  <li>
    <Link 
      href={`/post?title=${props.title}`}
      as={`/p/${props.id}`}
      >
      <a>{props.title}</a>
    </Link>
  </li>
)

const Index = () => (
  <Layout>
    <Title>
      Hello Zach
    </Title>
    <PostLink id='hello' title='Hello Next.js' />
    <PostLink id='awesome' title='Learn how awesome Zach is' />
    <PostLink id='ball' title='I can hit the ball far' />
  </Layout>
)

const Title = styled.h1`
  color: red;
`

export default Index