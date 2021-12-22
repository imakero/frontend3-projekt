const baseUrl = "https://frebi.willandskill.eu"

const getHeaders = () => {
  const token = localStorage.getItem("js3-project-token")
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  }
}

const get = (apiPath) => {
  const url = `${baseUrl}${apiPath}`
  return fetch(url, {
    headers: getHeaders(),
  }).then((res) => res.json())
}

const post = (apiPath, body) => {
  const url = `${baseUrl}${apiPath}`
  return fetch(url, {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify(body),
  })
}

// 'remove' since 'delete' conflicts with javascript keyword
const remove = (apiPath, id) => {
  const url = `${baseUrl}${apiPath}`
  return fetch(url, {
    method: "DELETE",
    headers: getHeaders(),
  })
}

const patch = (apiPath, body) => {
  const url = `${baseUrl}${apiPath}`
  return fetch(url, {
    method: "PATCH",
    headers: getHeaders(),
    body: JSON.stringify(body),
  })
}

const api = {
  get,
  post,
  delete: remove,
  patch,
}

export default api
