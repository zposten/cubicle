import React from 'react'
import styled from 'styled-components'
import {primary} from 'general/theme'

const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  background: ${primary};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8em;
  opacity: 0.8;
`

const Link = styled.a`
  margin-left: 5px;
`

export function DesignCredit() {
  return (
    <Wrapper>
      This site was beautifully designed by
      <Link href="https://kierstynrobbins.com" target="_blank">
        @KierstynRobbins
      </Link>
    </Wrapper>
  )
}
