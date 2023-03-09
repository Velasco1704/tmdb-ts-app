export const getPopularMovies = async () =>
  await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${
      import.meta.env.VITE_API_KEY
    }&language=en-US&page=1`
  )
    .then((res) => res.json())
    .then((res) => res.results);
export const getTopRatedMovies = async () =>
  await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${
      import.meta.env.VITE_API_KEY
    }&language=en-US&page=1`
  )
    .then((res) => res.json())
    .then((res) => res.results);
export const getMoviesDetails = async (id: number) =>
  await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${
      import.meta.env.VITE_API_KEY
    }&language=en-US`
  )
    .then((res) => res.json())
    .then((res) => res);
export const getPopularTV = async () =>
  await fetch(
    `https://api.themoviedb.org/3/tv/popular?api_key=${
      import.meta.env.VITE_API_KEY
    }&language=en-US&page=1`
  )
    .then((res) => res.json())
    .then((res) => res.results);
export const getTopRatedTV = async () =>
  await fetch(
    `https://api.themoviedb.org/3/tv/top_rated?api_key=${
      import.meta.env.VITE_API_KEY
    }&language=en-US&page=1`
  )
    .then((res) => res.json())
    .then((res) => res.results);
export const getTVDetails = async (id: number) =>
  await fetch(
    `https://api.themoviedb.org/3/tv/${id}?api_key=${
      import.meta.env.VITE_API_KEY
    }&language=en-US`
  )
    .then((res) => res.json())
    .then((res) => res);
export const SearchMovieOrTV = async (title: string) =>
  await fetch(
    `https://api.themoviedb.org/3/search/multi?api_key=${
      import.meta.env.VITE_API_KEY
    }&language=en-US&query=${title}&page=1&include_adult=false`
  )
    .then((res) => res.json())
    .then((res) => res.results);
