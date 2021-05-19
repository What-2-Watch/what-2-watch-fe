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
    .then(genres => genres.response)
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

export const cleanGenres = (array) => {
  return array.map(genres => {
    return {

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