import React from 'react'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

import {primaryDark} from 'general/theme'
import {TitleBlock} from './TitleBlock'

const Wrapper = styled.div`
  display: grid;
  margin-top: -6vw;
  background: white;

  grid-template-rows: auto 1fr;
  grid-template-areas: 
    "pic"
    "bio";

  ${breakpoint('lg')`
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 650px;
    grid-template-areas: "bio pic";
  `}
`

const Bio = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  grid-area: bio;

  padding: 100px 30px;

  ${breakpoint('xl')`
    padding: 100px;
    padding-bottom: 0;
  `}
`

const BioText = styled.h3`
  color: ${primaryDark};
  line-height: normal;
  font-weight: 300;
`

const ProfilePic = styled.img`
  width: 100%;
  grid-row: 1 / 2;
  grid-area: pic;
`

export const MiniProfile = () => (
  <Wrapper>
    <Bio>
      <TitleBlock>A professional problem solver</TitleBlock>
      <BioText>
        I am a software engineer by trade, but at my core, I am a problem solver.
        I love puzzles in all forms and I am constantly looking for new challenges.
        With a Software Engineering degree from MSOE, as well as my experience at
        Johnson Controls and as a software consultant, I am dedicated to finding
        effective solutions while writing beautiful code.
      </BioText>
    </Bio>
    <ProfilePic src='/static/zach.jpg'  />
  </Wrapper>
)