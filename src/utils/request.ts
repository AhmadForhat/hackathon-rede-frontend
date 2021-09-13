export const Get = (
  endpoint: any,
  isAuthenticated = true,
  clearIfNotAllowed = true
) => {
  return request(endpoint, 'GET', null, isAuthenticated, clearIfNotAllowed)
}

export const Post = (
  endpoint: any,
  data: any,
  isAuthenticated = true,
  clearIfNotAllowed = true
) => {
  return request(endpoint, 'POST', data, isAuthenticated, clearIfNotAllowed)
}

export const Put = (
  endpoint: any,
  data: any,
  isAuthenticated = true,
  clearIfNotAllowed = true
) => {
  return request(endpoint, 'PUT', data, isAuthenticated, clearIfNotAllowed)
}

export const request = (
  endpoint: any,
  method: any,
  data: any,
  isAuthenticated = true,
  clearIfNotAllowed = true
) => {
  const configFetch: any = {
    method,
    headers: {
      'Content-Type': 'application/json'
    }
  }
  if (isAuthenticated) {
    configFetch.headers.Authorization = window.localStorage.getItem(
      'user_token'
    )
  }

  if (method === 'POST' || method === 'PUT') {
    configFetch.body = JSON.stringify(data)
  }

  return window
    .fetch(endpoint, configFetch)
    .then(response => {
      if (response.status >= 401 && response.status <= 403 && clearIfNotAllowed)
        window.localStorage.clear()
      return response.json()
    })
}
