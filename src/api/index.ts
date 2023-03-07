export const getPopularMovies = async () =>
  await fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=c6e659ce68d6852391880c01464cc60b&language=en-US&page=1"
  )
    .then((res) => res.json())
    .then((res) => res.results);
export const getTopRatedMovies = async () =>
  await fetch(
    "https://api.themoviedb.org/3/movie/top_rated?api_key=c6e659ce68d6852391880c01464cc60b&language=en-US&page=1"
  )
    .then((res) => res.json())
    .then((res) => res.results);
export const getPopularTV = async () =>
  await fetch(
    "https://api.themoviedb.org/3/tv/popular?api_key=c6e659ce68d6852391880c01464cc60b&language=en-US&page=1"
  )
    .then((res) => res.json())
    .then((res) => res.results);
export const getTopRatedTV = async () =>
  await fetch(
    "https://api.themoviedb.org/3/tv/top_rated?api_key=c6e659ce68d6852391880c01464cc60b&language=en-US&page=1"
  )
    .then((res) => res.json())
    .then((res) => res.results);
