import React, {useState} from 'react'
import Head from 'next/head'

import {PageLayout} from '@/components/layout'
import {Title, Column} from '@/components'
import {Gameboard} from '@/sections/apps/jeopardy'

export default function Jeopardy() {
  const [roundOneScore, setRoundOneScore] = useState(0)
  const [roundTwoScore, setRoundTwoScore] = useState(0)

  function setScore(oldScore, newScore, round) {
    let scoreDelta = newScore - oldScore
    if (round === 1) setRoundOneScore(roundOneScore + scoreDelta)
    if (round === 2) setRoundTwoScore(roundTwoScore + scoreDelta)
  }

  return (
    <PageLayout>
      <Head>
        <title>Jeopardy</title>
      </Head>
      <Title title="Jeopardy Calculator" />
      <Column>
        <p>Type your categories in the top row and play along as you watch!</p>

        <ul>
          <li>
            <b>One click:</b> Did not answer the question
          </li>
          <li>
            <b>Two clicks:</b> Answered the question correctly
          </li>
          <li>
            <b>Three clicks:</b> Answered the question incorrectly
          </li>
          <li>
            <b>Four clicks:</b> Reset the question
          </li>
        </ul>

        <h1>Jeopardy round</h1>
        <Gameboard
          values={[200, 400, 600, 800, 1000]}
          colCount={6}
          setScore={setScore}
          round={1}
        />
        <p>Total for jeopardy round: ${roundOneScore}</p>
        <br />
        <br />
        <h1>Double Jeopardy round</h1>
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
