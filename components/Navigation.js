import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const LinkText = styled.div`
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
      <Link href="/">
        <LinkText>Home</LinkText>
      </Link>
      <Link href="/blog">
        <LinkText>Blog</LinkText>
      </Link>
      <Link href="/apps">
        <LinkText>Apps</LinkText>
      </Link>
    </Wrapper>
  )
}
