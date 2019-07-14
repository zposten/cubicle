import React from 'react'
import PropTypes from 'prop-types'

import {Title, Card, CardColumn} from 'components'
import {PageLayout} from 'components/layout'

export function BlogCardList(props) {
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
              onClick={() => handleCardClick(props.router, c.id)}
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
  router: PropTypes.object,
}

export function handleCardClick(router, id) {
  let current = router.asPath
  let destination = `${current}/${id}`
  router.push(destination)
}
