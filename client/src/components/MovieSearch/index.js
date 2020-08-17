import React, { useState } from "react"

import { Cards } from "./Cards"
import { Form as Search } from "./Form"

// Importing a function
import api from "api"

// Invoking the function returns an object with an 'index' method
const moviesRepo = api()

export const MovieSearch = () => {
  const [movies, setMovies] = useState([])

  const searchHandler = async (event) => {
    // We only care about the 'results' property
    const { results } = await moviesRepo.index(event.target.elements[0].value)
    setMovies(results)
  }

  return (
    <main>
      <Search handler={searchHandler} />
      <Cards movies={movies} />
    </main>
  )
}
