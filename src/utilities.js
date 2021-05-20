const checkResponse = (response) => {
  if(response.ok) {
  return response.json()
} else {
  throw new Error('this request isn\'t available')
}}

export const submitNewUser = (userData) => {
    return fetch(`https://what-2-watch-be.herokuapp.com/v1/users/`, {
      method: 'POST',
      body: JSON.stringify(userData), 
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(response => checkResponse(response))
}

export const confirmLogin = () => {
    return fetch(`https://what-2-watch-be.herokuapp.com/v1/users/`)
        .then(response => checkResponse(response))
} 

export const getGenres = (language) => {
  return fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=d485a0da5573c3e7d61614d66ae23824&language=${language}`)
    .then(response => checkResponse(response))
    .then(genres => genres.genres)
    .catch()
}

export const getRegions = (language) => {
  return fetch(`https://api.themoviedb.org/3/watch/providers/regions?api_key=d485a0da5573c3e7d61614d66ae23824&language=${language}`)
    .then(response => checkResponse(response))
    .then(data => cleanRegionData(data.results))
    .catch()
}

export const getServices = (region, language) => {
  return fetch(`https://api.themoviedb.org/3/watch/providers/movie?api_key=d485a0da5573c3e7d61614d66ae23824&language=${language}&watch_region=${region}`)
        .then(response => checkResponse(response))
        .then(data => cleanServiceData(data.results))
        .catch()
}

export const getMovieDetails = (id, language) => {
  return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=d485a0da5573c3e7d61614d66ae23824&language=${language}`)
  .then(response => checkResponse(response))
  .then(movieData => cleanMovieDetails(movieData))
  .catch()
}

export const movieSearch = (query) => {
  return fetch(`https://api.themoviedb.org/3/discover/movie?api_key=d485a0da5573c3e7d61614d66ae23824${query}`)
    .then(response => checkResponse(response))
    .then(response => cleanMovieSearchData(response.results))
    .catch()
}

const cleanMovieDetails(movieData) => {
  return {
    'id': movieData.id,
    'genres': movieData.genre_ids,
    'backdrop': movieData.backdrop_path,
    'title': movieData.title,
    'overview': movieData.overview,
    'poster': movieData.poster_path,
    'release_date': movieData.release_date,
    'user_rating': movieData.vote_average,
    'run_time':movieData.runtime,
    'tagline':movieData.tagline
  }
}

const cleanMovieSearchData = (array) => {
  return array.map(movieData => {
    return {
      'id':movieData.id, 
      'genres':movieData.genre_ids,
      'backdrop': movieData.backdrop_path,
      'title': movieData.title,
      'poster': movieData.poster_path, 
      'release_date': movieData.release_date, 
      'user_rating': movieData.vote_average
    }
  })
}


const cleanServiceData = (array) => {
  return array.map(service => {
    return {
      'logo_path': service.logo_path,
      'name': service.provider_name,
      'id': service.provider_id
    }
  })
}

const cleanRegionData = (array) => {
  return array.map(region => {
    return {
      'en_name': region.english_name,
      'id': region.iso_3166_1
    }
  })
}