import styled from 'styled-components'
import {primary, primaryDark} from '../general/theme'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  margin-top: -6vw;
  background: white;
  ${'' /* margin-bottom: 12vw; */}
`

const Bio = styled.div`
  background: white;
  padding: 100px;
  padding-top: calc(6vw + 20px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

const BioHeader = styled.div`
  background: ${primary};
  font-family: 'Anton';
  color: white;
  padding: 10px;
  margin-bottom: 20px;
  font-size: 1.7rem;
`

const BioText = styled.div`
  color: ${primaryDark};
  font-size: 1.2rem;
  line-height: normal;
`

const ProfilePic = styled.img`
  width: 600px;
`

export const MiniProfile = () => (
  <Wrapper>
    <Bio>
      <BioHeader>A PROFESSIONAL PROBLEM SOLVER</BioHeader>
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