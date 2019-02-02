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
    margin-left: 100px;
    margin-right: 100px;
  `}
`

const Text = styled.p`
  color: ${primaryDark};
  margin-bottom: 30px;

  ${breakpoint('md')`
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
      When not writing code, I enjoy photography, cooking, and spending time with my
      dog, Lola.  I'm an avid Brewers fan, and love spending time with my super cute 
      girlfriend who is the very best of the best.
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