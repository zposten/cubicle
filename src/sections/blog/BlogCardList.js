import React from 'react'
import PropTypes from 'prop-types'
import {useRouter} from 'next/router'

import {Card, CardColumn} from 'components'
import {PageLayout} from 'components/layout'

export function BlogCardList(props) {
  const router = useRouter()
  return (
    <PageLayout>
      {props.children}
      <CardColumn>
        {props.cards &&
          props.cards.map(c => (
            <Card
              key={c.id}
              src={
                c.imageFilename && require(`static/images/${c.imageFilename}`)
              }
              backupSrc={require('static/images/code.png')}
              title={c.title}
              description={c.description}
              onClick={() => handleCardClick(router, c.id)}
              date={props.showDate && c.dateString}
            />
          ))}
      </CardColumn>
    </PageLayout>
  )
}

BlogCardList.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      imageFilename: PropTypes.string,
      id: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
    }),
  ),
  showDate: PropTypes.bool,
}

BlogCardList.defaultProps = {
  showDate: true,
}

export function handleCardClick(router, id) {
  let current = router.asPath
  let destination = `${current}/${id}`
  router.push(destination)
}
