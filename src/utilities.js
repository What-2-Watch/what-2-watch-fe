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


export const movieSearch = (query) => {
  return fetch(`https://api.themoviedb.org/3/search/movie?api_key=d485a0da5573c3e7d61614d66ae23824${query}`)
    .then(response => checkResponse(response))
    .then(response => cleanMovieSearchData(response.results))
}

export const cleanMovieSearchData = (array) => {
  return array.map(movieData => {
    return {
      'id':movieData.id, 
      'genres':movieData.genre_ids,
      'backdrop': movieData.backdrop_path,
      'title': movieData.title,
      'overview': movieData.overview,
      'poster': `https://www.themoviedb.org/t/p/w220_and_h330_face/${movieData.poster_path}`,
      'release_date': movieData.release_date, 
      'user_rating': movieData.vote_average
    }
  })
}

export const filterResultsByGenre = (searchResults, genreID) => {
  return searchResults.filter(movie => {
    movie.genre_ids.includes(genreID)
  })
}

export const cleanServiceData = (array) => {
  return array.map(service => {
    return {
      logo_path: service.logo_path,
      name: service.provider_name,
      id: service.provider_id
    }
  })
}

export const cleanRegionData = (array) => {
  return array.map(region => {
    return {
      en_name: region.english_name,
      id: region.iso_3166_1
    }
  })
}




//get genres
//get languages
/*get regions 
services 
https://api.themoviedb.org/3/watch/providers/regions?api_key=d485a0da5573c3e7d61614d66ae23824&language=en-US
*/


//