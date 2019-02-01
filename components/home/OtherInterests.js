import styled from 'styled-components'
import {TitleBlock} from './TitleBlock'
import {primaryDark, secondary, primary} from '../../general/theme'

const Wrapper = styled.div`
  padding: 40px;
  padding-top: 50px;
  padding-bottom: 200px;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const Text = styled.p`
  color: ${primaryDark};
  font-size: 1.1rem;
  margin: 100px;
  margin-top: 20px;
`

const Grid = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: repeat(5, 1fr);
  width: 100%;
  grid-gap: 10px;
`

const GridSquare = styled.div`
  width: 100%;
  height: 100px;
  background: ${secondary};
`

export const OtherInterests = () => (
  <Wrapper>
    <TitleBlock>My other interests</TitleBlock>
    <Text>
      When not writing code, I enjoy photography, cooking, and spending time with my
      dog, Lola.  I'm an avid Brewers fan, and love spending time with my super cute 
      girlfriend who is the very best of the best.
    </Text>
    <Grid>
      {
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => (
          <GridSquare />
        ))
      }
    </Grid>
  </Wrapper>
)