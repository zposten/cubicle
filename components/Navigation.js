import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const A = styled.a`
  margin-right: 40px;
  color: blue;
  cursor: pointer;
  color: white;

  &:hover {
    text-shadow: 
      0 0 10px #fff, 
      0 0 20px #fff,
      0 0 30px #fff;
  }
}
`

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: absolute;
  top: 40px;
  right: 10px;
  z-index: 2;
`

export function Navigation(props) {
  return (
    <Wrapper>
      <Link href='/'><A>Home</A></Link>
      <Link href='/blog'><A>Blog</A></Link>
      <Link href='/apps'><A>Apps</A></Link>
    </Wrapper>
  )
}