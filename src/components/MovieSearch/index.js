import React, { useEffect, useState } from "react"

import { Cards } from "./Cards"
import { Form as Search } from "./Form"

import api from "api"

export const MovieSearch = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    ; (async () => {
      setMovies()
      console.log(await api.index())
    })()
  })

  return (
    <main>
      <Search />
      <Cards />
    </main>
  )
}
