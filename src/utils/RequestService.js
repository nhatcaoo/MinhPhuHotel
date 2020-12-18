import Http from '@/plugin/axios.js'
export const Get = (apiUrl, query) => {
  return Http({
    url: apiUrl,
    method: 'GET',
    params: query || null
  })
}

export const Put = (apiUrl, data) => {
  return Http({
    url: apiUrl,
    method: 'PUT',
    data: data || null,
  })
}

export const Post = (apiUrl, data) => {
  return Http({
    url: apiUrl,
    method: 'POST',
    data: data,
  })
}

export const Delete = (apiUrl, data) => {
  return Http({
    url: apiUrl,
    method: 'DELETE',
    data: data
  })
}

export const Mock = (apiUrl, data, query) => {
  console.log('Mock data with url: ', apiUrl)
  return new Promise(resolve => {
    resolve(data)
  })
}
