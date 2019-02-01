import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

import {primary, primaryDark} from '../../general/theme'
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
    grid-template-columns: 1fr 600px;
    grid-template-areas: "bio pic";
  `}
`

const Bio = styled.div`
  background: white;
  ${'' /* padding-top: calc(6vw + 20px); */}
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  grid-area: bio;

  padding: 100px 30px;

  ${breakpoint('xl')`
    padding: 100px;
  `}
`

const BioText = styled.div`
  color: ${primaryDark};
  font-size: 1.2rem;
  line-height: normal;
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
        Johnson Controls and as a Software Consultant, I am dedicated to finding
        solutions and writing effective, beautiful code.
      </BioText>
    </Bio>
    <ProfilePic src='/static/zach.jpg'  />
  </Wrapper>
)