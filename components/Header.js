import Link from 'next/link'
import styled from 'styled-components'

const A = styled.a`
  margin-right: 15px;
  color: blue;
  cursor: pointer;
`

const Wrapper = styled.div`
  display: flex;
`

export const Header = () => (
  <Wrapper>
    <Link href='/'><A>Home</A></Link>
    <Link href='/about'><A>About</A></Link>
  </Wrapper>
)