import getAccessToken from "../cookies/cookies"

async function authenticatedFetch<data = {}>(input: URL | RequestInfo, init?: Omit<RequestInit, "body"> & {
     body?: any
} | undefined): Promise<data> {
     const { body, ...customConfig } = init || {}
     const token = getAccessToken()
     const customHeaders = "headers" in customConfig ? customConfig.headers : {}
     const headers: RequestInit["headers"] = { 'content-type': 'application/json' }
     if (token) {
          headers.Authorization = `Bearer ${token}`
     }
     const config: RequestInit = {
          method: body ? 'POST' : 'GET',
          ...customConfig,
          headers: {
               ...headers,
               ...customHeaders,
          },
     }
     if (body) {
          config.body = JSON.stringify(body)
     }
     return fetch(`${process.env.API_URL}${input}`, config)
          .then(async response => {
               if (response.ok) {
                    return await response.json()
               } else {
                    const errorMessage = await response.text()
                    return Promise.reject(new Error(errorMessage))
               }
          })
}
export default authenticatedFetch
