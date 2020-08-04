export default {
  async index() {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/550?api_key=e34b666270d66042d14591fe1dcb72bb"
    )

    return await res.json()
  },
}
