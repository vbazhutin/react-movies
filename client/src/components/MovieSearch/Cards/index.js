import PropTypes from 'prop-types'
import React from 'react'

export const Cards = ({movies}) => {
  // TODO: Map over movies to create individual cards...
  // 'cards' might use: <figure><img src={`afadf`}poster path"><figcaption><p>title - year - ratings - sumamry</p></figcaption></figure>

  return <p>I am Cards!</p>
}

Cards.propTypes = {
  movies: PropTypes.array
}
