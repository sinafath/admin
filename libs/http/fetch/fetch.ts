import getAccessToken from "../cookies/accessToken"
type init = Omit<RequestInit, "body"> & {
     body?: any
} | undefined
type input = URL | RequestInfo
async function authenticatedFetch<data = {}>(input: input, init?: init): Promise<data> {
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
               const data = await response.json()
               if (response.ok) {
                    return data
               } else {
                    return Promise.reject(data)
               }
          })
}
const authenticatedDelete = (input: input, init?: init) => authenticatedFetch(input, { method: "DELETE" });
export { authenticatedDelete }
export default authenticatedFetch
