import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

import {secondary, secondaryDark} from 'general/theme'
import {GithubIcon, TwitterIcon, LinkedInIcon} from 'general/socialNetworkIcons'
import {NeonText} from './NeonText'


const DropShadow = styled.div`
  filter: drop-shadow(0px 10px 5px rgba(0,0,0,0.5));
`

const Wrapper = styled.div`
  height: 800px;
  max-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-image: radial-gradient(circle, ${secondary} 20%, ${secondaryDark} 80%);
  clip-path: polygon(
    0 0, /* left top */
    100% 0, /* right top */ 
    100% calc(100% - 6vw), /* right bottom */
    0 100% /* left bottom */
  );
  box-shadow: 20px 20px;
`

const Cube = styled.img`
  max-width: 600px;
  width: 90vw;
  position: relative;
  transition: filter 0.5s;

  &.hover, &:hover {
    filter: drop-shadow(10px 10px 50px white);
  }

  ${breakpoint('sm')`
    width: 66vw;
  `}
`

const Content = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`



const Line = styled.div`
  height: 2px;
  width: 100px;
  background: white;
`

const SmallText = styled.div`
  line-height: normal;
  margin-top: 20px;
`

const SocialLink = (props) => {
  let Link = styled.a`
    margin-right: ${props.last ? 0 : 5}px;
  `
  return (
    <Link href={props.href} target='_blank'>
      {props.children}
    </Link>
  )
}

SocialLink.propTypes = {
  last: PropTypes.bool,
  href: PropTypes.string.isRequired,
  children: PropTypes.any,
}

const Socials = styled.div`
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export function Jumbotron() {
  return (
    <DropShadow>
      <Wrapper>
        <Cube src='/static/cube.png' />
        <Content>
          <NeonText>ZACH POSTEN</NeonText>
          <Line />
          <SmallText>SOFTWARE ENGINEER</SmallText>
          <Socials>
            <SocialLink href='http://www.github.com/zposten'><GithubIcon /></SocialLink>
            <SocialLink href='http://www.twitter.com/ZachPosten'><TwitterIcon /></SocialLink>
            <SocialLink href='http://www.linkedin.com/in/zachposten' last><LinkedInIcon /></SocialLink>
          </Socials>
        </Content>
      </Wrapper>
    </DropShadow>
  )
}