import React from 'react'
import PropTypes from 'prop-types'

import {Title, Card, CardColumn} from 'components'
import {PageLayout} from 'layout'

export function BlogCardList(props) {
  function handleCardClick(id) {
    let current = props.url.asPath
    let destination = `${current}/${id}`

    props.url.push(destination)
  }

  return (
    <PageLayout>
      <Title
        title="Blog"
        subtitle="My thoughts, views, and opinions on technical and non-technical matters"
      />
      <CardColumn>
        {props.cards.map(c => (
          <Card
            key={c.id}
            src={`/static/images/${c.imageFilename}`}
            backupSrc={'/static/images/code.png'}
            title={c.title}
            description={c.description}
            onClick={() => handleCardClick(c.id)}
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
  url: PropTypes.object,
}
