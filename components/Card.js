import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import {lighten} from 'polished'
import ButtonBase from '@material-ui/core/ButtonBase'
import {useRouter} from 'next/router'

import {primary} from 'general/theme'

const MyButtonBase = styled(ButtonBase)`
  font-size: inherit;
  border: 0;
`

const Wrapper = styled(MyButtonBase)`
  background-color: ${lighten(0.05, primary)} !important;
  display: grid !important;
  grid-template-rows: [pic] 1fr [text] 1fr;
  grid-template-areas: 'pic' 'text';
  justify-content: stretch !important;
  width: 100%;
  overflow: hidden;
  cursor: pointer;
  height: ${props => props.height || 'auto'};
  position: relative;
  border: 5px;
  max-width: 700px;
  height: 250px;

  transition: 0.1s ease-in;

  &:hover {
    transform: translate(10px, -10px);
    background-color: ${lighten(0.1, primary)};
  }

  ${breakpoint('sm')`
    grid-template-rows: 1fr;
    grid-template-columns: [pic] 1fr [text] 1fr;
    grid-template-areas: "pic text";
  `}
`

const Image = styled.div`
  grid-area: pic;
  height: 100%;
  width: 100%;
  place-self: ${p => (p.flip ? 'end' : 'start')};
  background-image: url(${p => p.src})
    ${p => p.backupSrc && `, url("${p.backupSrc}")`};
  background-repeat: no-repeat;
  background-size: cover;
`

const TextWrapper = styled.div`
  grid-area: text;
  display: grid;
  grid-template-rows: [title] auto [description] 1fr;
  grid-gap: 20px;
  margin: auto;
`

const Title = styled.h4`
  margin: 0;
  grid-row: title;
  margin-left: 30px;
  margin-right: 30px;
`

const Description = styled.p`
  margin: 0;
  grid-row: description;
  margin-left: 30px;
  margin-right: 30px;
`

const Info = styled.div`
  font-size: 15px;
  display: flex;
  align-items: center;
  padding: 5px 0;
  font-weight: bold;
  position: absolute;
  bottom: 10px;
  right: 20px;
  padding-left: 30px;
  opacity: 0.6;
`

export function Card(props) {
  const router = useRouter()
  let {height, src, backupSrc, title, description, id, onClick, ...rest} = props

  /* If no onClick handler is passed, and an id is explicitly
   * passed, then automatically append that id to the url when
   * the card is clicked */
  function handleClick() {
    if (onClick) {
      onClick()
      return
    }

    if (id) {
      let currentUrl = router.asPath
      let destination = `${currentUrl}/${id}`
      router.push(destination)
    }
  }

  return (
    <Wrapper height={height} component="div" onClick={handleClick} {...rest}>
      <Image src={src} backupSrc={backupSrc} />
      <TextWrapper>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Info>
          <div>{props.date}</div>
        </Info>
      </TextWrapper>
    </Wrapper>
  )
}

Card.propTypes = {
  src: PropTypes.string.isRequired,
  backupSrc: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  height: PropTypes.string,
  date: PropTypes.string,
  id: PropTypes.string,
}
