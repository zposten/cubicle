import React, {useState} from 'react'

const zachCharToTriggerMask = ';'
const kiermoCharToTriggerMask = '/'

export function useQuestionMask(isDisabled) {
  const [secret, setSecret] = useState('')
  const [isMaskActive, setIsMaskActive] = useState(false)
  const [petition, setPetition] = useState('')
  const [question, setQuestion] = useState('')
  const [user, setUser] = useState(null)

  function onPetitionKeyDown(e) {
    if (isDisabled) {
      e.preventDefault()
      return
    }

    if (e.key === 'Backspace') {
      // Stop onPetitionChange from being fired
      e.preventDefault()

      let isTextSelected = window.getSelection().type === 'Range'
      if (isTextSelected) {
        setSecret('')
        setPetition('')
      } else {
        setSecret(backspace(secret))
        setPetition(backspace(petition))
      }
    } else if (
      e.key === zachCharToTriggerMask ||
      e.key === kiermoCharToTriggerMask
    ) {
      // Stop onPetitionChange from being fired
      e.preventDefault()

      let user = e.key === zachCharToTriggerMask ? 'zach' : 'kiermo'
      setUser(user)

      typePetitionCharacter('', true, user)
      setIsMaskActive(!isMaskActive)
    }
  }

  function onPetitionChange(e) {
    let input = e.target
    let newChar = input.value.slice(-1)
    typePetitionCharacter(newChar)
  }

  function typePetitionCharacter(char, shouldMaskTyping = isMaskActive) {
    const zachMaskText = 'Google, my name is Zachary Posten, from Milwaukee, WI'
    const kiermoMaskText =
      'Google, my name is Kierstyn Robbins, from Milwaukee, WI'

    let maskText = user === 'zach' ? zachMaskText : kiermoMaskText

    let newSecret = shouldMaskTyping ? secret + char : secret
    let newPetition = shouldMaskTyping
      ? petition + maskText.substring(petition.length, petition.length + 1)
      : petition + char

    setSecret(capitalizeFirstLetter(newSecret))
    setPetition(newPetition)
  }

  function onQuestionChange(e) {
    if (isDisabled) {
      e.preventDefault()
      return
    }

    let typedQuestion = e.target.value
    setQuestion(typedQuestion)
  }

  function reset() {
    setPetition('')
    setSecret('')
    setQuestion('')
    setIsMaskActive(false)
  }

  return {
    onPetitionChange,
    onPetitionKeyDown,
    onQuestionChange,
    petition,
    question,
    secret,
    reset,
  }
}

function backspace(str) {
  return str.slice(0, -1)
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
