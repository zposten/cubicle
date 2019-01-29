import Link from 'next/link'
import styled from 'styled-components'
import {Layout} from '../components/Layout'

const Index = () => (
  <Layout>
    <Title>
      Hello Zach
    </Title>
    <Link href='/about'>
      <button>About me</button>
    </Link>
  </Layout>
)

const Title = styled.h1`
  color: red;
`

export default Index