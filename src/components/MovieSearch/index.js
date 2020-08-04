import React, { useEffect, useState } from "react"

import { Cards } from "./Cards"
import { Form as Search } from "./Form"

import api from "api"

export const MovieSearch = () => {
  const [movies, setMovies] = useState([])

  const searchHandler = async (event) => {
    // We only care about the 'results' property
    const { results } = await api.index(event.target.elements[0].value)
    setMovies(results)
  }

  return (
    <main>
      <Search handler={searchHandler} />
      <Cards movies={movies} />
    </main>
  )
}
