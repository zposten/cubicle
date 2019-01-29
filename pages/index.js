import Link from 'next/link'
import styled from 'styled-components'
import {Header} from '../components/Header'

const Index = () => (
  <div>
    <Header />
    <Title>
      Hello Zach
    </Title>
    <Link href='/about'>
      <button>About me</button>
    </Link>
  </div>
)

const Title = styled.h1`
  color: red;
`

export default Index