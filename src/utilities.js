
const checkResponse = (response) => {
  if(response.ok) {
  return response.json()
} else {
  // alert("There was an error with your request. Please try again.")
}}

export const postWatchlist = (watchListObj) => {
  return fetch('https://what-2-watch-be.herokuapp.com/v1/watchlists/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(watchListObj)
  })
  .then(res => res.json())
}

export const removeWatchlist = (id) => {
  return fetch(`https://what-2-watch-be.herokuapp.com/v1/watchlists/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
  })
}

export const getUserRecs = (id) => {
  return fetch(`https://what-2-watch-be.herokuapp.com/v1/movies?user=${id}`)
  .then(res => checkResponse(res))
} 

export const postThumb = async ({api_movie_id, up, title}) => {
  let thumb = {
      'user': getUserId(),
      api_movie_id,
      up,
      title,
      "api_actor_id": null,
      "api_director_id": null,
      "api_genre_id": null,
      "api_similar_id": 123,
  }
  await Promise.all([getCredits(api_movie_id), getMovieGenre(api_movie_id)])
    .then(responses => {
      thumb.api_director_id = getDirectorID(responses[0])
      thumb.api_actor_id = getActorID(responses[0])
      thumb.api_genre_id = responses[1].id
  }) 
    return fetch(`https://what-2-watch-be.herokuapp.com/v1/thumbs/`, {
      method: 'POST',
      body: JSON.stringify(thumb),
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(res => res.json())
    .catch()
}

const getMovieGenre = (movieID) => {
  return fetch(`https://api.themoviedb.org/3/movie/${movieID}?api_key=d485a0da5573c3e7d61614d66ae23824&language=en-US`)
    .then(response => checkResponse(response))
    .then(data => data.genres[0])
    .catch(err => console.log(err))
    
}

const getCredits = (movieID) => {
  return fetch (`https://api.themoviedb.org/3/movie/${movieID}/credits?api_key=d485a0da5573c3e7d61614d66ae23824&language=en-US`)
  .then(response => checkResponse(response))
  .catch(err => console.log(err))
}

const getDirectorID = (creditData) => {
  const director = creditData.crew.find(crew => crew.job === "Director")
  return director.id
}

const getActorID = (creditData) => {
  const actors = creditData.cast.sort((a, b) => a.popularity - b.popularity)
  return actors[0].id
}

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

export const getUserById = (id) => {
  return fetch(`https://what-2-watch-be.herokuapp.com/v1/users/${id}`)
      .then(response => checkResponse(response))
      .then(data => data)
}

export const confirmLogin = (user, userList) => {
  const foundUser = userList.find(potentialUser => potentialUser.email === user.email)
  return foundUser
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

export const getServices = (region = 'US', language = 'en-US') => {
  return fetch(`https://api.themoviedb.org/3/watch/providers/movie?api_key=d485a0da5573c3e7d61614d66ae23824&language=${language}&watch_region=${region}`)
        .then(response => checkResponse(response))
        .then(data => cleanServiceData(data.results))
        .catch()
}

export const getUsers = () => {
  return fetch(`https://what-2-watch-be.herokuapp.com/v1/users/`)
        .then(response => checkResponse(response))

}

export const getMovieDetails = (id, language) => {
  return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=d485a0da5573c3e7d61614d66ae23824&language=${language}`)
  .then(response => checkResponse(response))
  .then(movieData => cleanMovieDetails(movieData))
  .catch()
}

export const movieSearch = (query) => {
  return fetch(`https://api.themoviedb.org/3/search/movie?api_key=d485a0da5573c3e7d61614d66ae23824${query}`)
    .then(response => checkResponse(response))
    .then(response => cleanMovieSearchData(response.results))
    .catch()
}

const cleanMovieDetails = (movieData) => {
  return {
    'id': movieData.id,
    'genres': movieData.genres,
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

export const getMovieById = (id) => {
  return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=d485a0da5573c3e7d61614d66ae23824`)
  .then(response => checkResponse(response))

}

export const cleanMovieSearchData = (array) => {
  return array.map(movieData => {
    return {
      'id':movieData.id, 
      'genres':movieData.genre_ids,
      'backdrop': `https://www.themoviedb.org/t/p/original/${movieData.backdrop_path}`,
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

export const postService = (userData) => {
  return fetch('https://what-2-watch-be.herokuapp.com/v1/subscriptions/', {
    method: 'POST',
    body: JSON.stringify(userData),
    headers: {
    'Content-Type': 'application/json'
    }
  })
  .then(response => checkResponse(response))
}

export const removeSubscription = (id) => {
  return fetch(`https://what-2-watch-be.herokuapp.com/v1/subscriptions/${id}`, {
    method: 'DELETE'
   })
    .then(response => console.log(response))
    .catch()
}

export const removeThumb = (id) => {
  return fetch(`https://what-2-watch-be.herokuapp.com/v1/thumbs/${id}`, {
    method: 'DELETE'
  })
    .then(response => console.log(response))
}

export const cleanServiceData = (array) => {
  return array.map(service => {
    return {
      logo: `https://www.themoviedb.org/t/p/original${service.logo_path}`,
      name: service.provider_name,
      id: service.provider_id
    }
  })
}

export const filterByTopServices = (services) => {
  const topServicesIds = ['8', '9', '337', '384', '15', '2', '143', '361', '258', '386', '192', '99', '300', '279', '37', '3']
  const topServices = services.filter(service => topServicesIds.includes(String(service.id)))
  return topServices
}

export const cleanRegionData = (array) => {
  return array.map(region => {
    return {
      'en_name': region.english_name,
      'id': region.iso_3166_1
    }
  })
}

export const setUserId = (id) => {
  sessionStorage.setItem('userId', String(id))
}

export const getUserId = () => {
  return parseInt(sessionStorage.getItem('userId'));
}