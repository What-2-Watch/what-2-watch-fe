const checkResponse = (response) => {
  if(response.ok) {
  return response.json()
} else {
  throw new Error('this request isn\'t available')
}}

export const submitNewUser = (userData) => {
    return fetch(`URL`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData), 
    })
    .then(response => checkResponse(response))
}

export const confirmLogin = (user) => {
    return fetch(`URL`)
        .then(response => checkResponse(response))
} 

export const getServices = () => {
    return fetch (`URL`)
        .then(response => checkResponse(response))
}