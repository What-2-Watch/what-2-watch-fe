const checkResponse = (response) => {
  if(response.ok) {
  return response.json()
} else {
  throw new Error('this request isn\'t available')
}}

export const submitNewUser = (userData) => {
    return fetch(`https://what-2-watch-be.herokuapp.com/v1/users/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData), 
    })
    .then(response => checkResponse(response))
}

export const confirmLogin = () => {
    return fetch(`https://what-2-watch-be.herokuapp.com/v1/users/`)
        .then(response => checkResponse(response))
} 

export const getServices = () => {
    return fetch (`URL`)
        .then(response => checkResponse(response))
}