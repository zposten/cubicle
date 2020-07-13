import React, {useState} from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import {PacmanLoader} from 'react-spinners'

import {PageLayout} from '@/components/layout'
import {Title, Button, Textbox, Column} from '@/components'
import {useQuestionMask} from '@/sections/apps/google'
import {secondary} from '@/general/theme'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-end;

  > * {
    margin-bottom: 20px;
  }
`

const AnswerText = styled.p`
  color: ${p => p.theme.colors.secondary};
  margin-top: 20px;
  font-size: 1.5em;
  text-align: center;
  width: 100%;
`

const loader = (
  <div
    style={{
      width: '150px',
      height: '70px',
      paddingTop: '20px',
    }}
  >
    <PacmanLoader color={secondary} />
  </div>
)

export default function GoogleAnswers() {
  const [shouldRevealAnswer, setShouldRevealAnswer] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [petitionError, setPetitionError] = useState('')
  const [questionError, setQuestionError] = useState('')
  const [isDisabled, setIsDisabled] = useState(false)
  const {
    onPetitionChange,
    onPetitionKeyDown,
    onQuestionChange,
    petition,
    question,
    secret,
    reset,
  } = useQuestionMask(isDisabled)

  function onSubmit() {
    setIsDisabled(!!(petition && question))
    setPetitionError(!petition)
    setQuestionError(!question)

    let hadError = !petition || !question
    if (hadError) return

    setIsLoading(true)
    setTimeout(() => {
      setShouldRevealAnswer(true)
      setIsLoading(false)
    }, 4000)
  }

  function resetForm() {
    reset()
    setIsDisabled(false)
    setShouldRevealAnswer(false)
  }

  let answerText = shouldRevealAnswer
    ? secret || 'Google could not authenticate you at this time'
    : petitionError
    ? 'You must identify yourself to Google'
    : questionError
    ? 'If answers you seek, questions you must ask'
    : undefined

  return (
    <PageLayout>
      <Head>
        <title>Google mainframe access</title>
      </Head>
      <Title
        title="Google mainframe access"
        subtitle="Prepare to be shocked and appalled"
      />
      <Column>
        <p style={{marginBottom: '50px'}}>
          As you may be aware, Google is constantly at work collecting your
          data. All your data. From any source available to it, which is most
          every source. This simple question and answer service allows you to
          get a glimpse into what Google knows about you. In the identification
          field, imply tell Google who you are. This, combined with other data
          it's currently collecting, authenticates you to the service. In this
          way, only you have access to your sensitive information.
        </p>
        <Wrapper>
          <Textbox
            onChange={onPetitionChange}
            onKeyDown={onPetitionKeyDown}
            value={petition}
            fullWidth
            label="Petition"
            id="petition"
            isDisabled={isDisabled}
          />
          <Textbox
            onChange={onQuestionChange}
            value={question}
            label="Question"
            fullWidth
            id="question"
            isDisabled={isDisabled}
          />
          <Button
            onClick={shouldRevealAnswer ? resetForm : onSubmit}
            isDisabled={isDisabled}
          >
            {isLoading
              ? loader
              : shouldRevealAnswer
              ? 'Ask another'
              : 'Query Google'}
          </Button>

          <AnswerText>{answerText}</AnswerText>
        </Wrapper>
      </Column>
    </PageLayout>
  )
}
