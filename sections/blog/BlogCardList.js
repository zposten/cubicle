import React from 'react'
import PropTypes from 'prop-types'
import {useRouter} from 'next/router'

import {Title, Card, CardColumn} from 'components'
import {PageLayout} from 'components/layout'

export function BlogCardList(props) {
  const router = useRouter()
  return (
    <PageLayout>
      <Title
        title="Blog"
        subtitle="My thoughts, views, and opinions on technical and non-technical matters"
      />
      <CardColumn>
        {props.cards &&
          props.cards.map(c => (
            <Card
              key={c.id}
              src={`/static/images/${c.imageFilename}`}
              backupSrc={'/static/images/code.png'}
              title={c.title}
              description={c.description}
              onClick={() => handleCardClick(router, c.id)}
              date={c.dateString}
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
}

export function handleCardClick(router, id) {
  let current = router.asPath
  let destination = `${current}/${id}`
  router.push(destination)
}
