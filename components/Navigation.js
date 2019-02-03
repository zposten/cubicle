import Link from 'next/link'
import styled from 'styled-components'

import {secondary} from '../general/theme'

const A = styled.a`
  margin-right: 40px;
  color: blue;
  cursor: pointer;
  color: white;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: absolute;
  top: 40px;
  right: 10px;
  z-index: 2;
`

export const Navigation = () => (
  <Wrapper>
    <Link href='/'><A>Home</A></Link>
    <Link href='/blog'><A>Blog</A></Link>
    <Link href='/apps'><A>Apps</A></Link>
  </Wrapper>
)