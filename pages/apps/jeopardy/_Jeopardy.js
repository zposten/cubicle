import React, {useState} from 'react'

import {PageLayout} from 'layout'
import {Title, Column} from 'components'
import {Gameboard} from './Gameboard'

export function Jeopardy() {
  const [roundOneScore, setRoundOneScore] = useState(0)
  const [roundTwoScore, setRoundTwoScore] = useState(0)

  function setScore(oldScore, newScore, round) {
    let scoreDelta = newScore - oldScore
    if (round === 1) setRoundOneScore(roundOneScore + scoreDelta)
    if (round === 2) setRoundTwoScore(roundTwoScore + scoreDelta)
  }

  return (
    <PageLayout>
      <Title
        title="Jeopardy"
        subtitle="A tool for keeping track of your score while you watch Jeopardy"
      />
      <Column>
        <h1>Jeopardy</h1>
        <Gameboard
          values={[200, 400, 600, 800, 1000]}
          colCount={6}
          setScore={setScore}
          round={1}
        />
        <p>Total for jeopardy round: ${roundOneScore}</p>
        <br />
        <br />
        <h1>Double Jeopardy</h1>
        <Gameboard
          values={[400, 800, 1200, 1600, 2000]}
          colCount={6}
          setScore={setScore}
          round={2}
        />
        <p>Total for double jeopardy round: ${roundTwoScore}</p>
        <br />
        <h4>Final score: ${roundOneScore + roundTwoScore}</h4>
      </Column>
    </PageLayout>
  )
}
