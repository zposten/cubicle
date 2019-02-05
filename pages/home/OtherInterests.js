import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

import {TitleBlock} from './TitleBlock'
import {primaryDark, secondary, primary} from '../../general/theme'

const Wrapper = styled.div`
  padding: 50px 30px 200px 30px;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${breakpoint('md')`
    padding-left: 100px;
    padding-right: 100px;
  `}
`

const Text = styled.div`
  color: ${primaryDark};
  margin-bottom: 30px;

  ${breakpoint('lg')`
    margin: 100px;
    margin-top: 20px;
  `}
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
      <p>
        When not writing code, I enjoy photography, cooking, and spending time with my
        dog, Lola.  I'm an avid Brewers fan, and love venturing into the great outdoors
        whenever possible.  
      </p>
      <p>
        Also, as you might have guessed from my website, I enjoy solving
        Rubik's cubes...quickly.  I have solved cubes from a 2x2 all the way up to a 7x7, but
        my fastest remains the standard 3x3 cube, which I have solved in a mere 14 seconds,
      </p>
    </Text>
    <Grid>
      {
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => (
          <GridSquare key={i} />
        ))
      }
    </Grid>
  </Wrapper>
)