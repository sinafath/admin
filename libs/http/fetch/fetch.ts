import getAccessToken from "../cookies/accessToken"
import { setNotification } from "../cookies/notification"
type init = Omit<RequestInit, "body"> & {
     body?: any
     notification?: boolean | string
} | undefined
type input = URL | RequestInfo
async function authenticatedFetch<data = {}>(input: input, init?: init): Promise<data> {
     const { body, notification, ...customConfig } = init || {}
     function notificationHandler() {
          if (notification === false) return
          if (typeof notification === "string") return setNotification(notification)
          setNotification("عملیات باموفقیت انجام شد")

     }
     const token = getAccessToken()
     const customHeaders = "headers" in customConfig ? customConfig.headers : {}
     const headers: RequestInit["headers"] = { 'content-type': 'application/json' }
     if (token) {
          headers.Authorization = `Bearer ${token.value}`
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
     return fetch(`${process.env.API_URL}${input}`, {
          cache: "no-store",
          ...config
     })
          .then(async response => {
               const data = await response.json()
               if (response.ok) {
                    (config.method === "POST" || config.method === "DELETE" || config.method === "PATCH" || notification) && notificationHandler()
                    return data
               } else {
                    console.log({ url:`${process.env.API_URL}${input}`,config,data:data?.errors?.message })
                    return Promise.reject(new Error(data))
               }
          })
}
const authenticatedDelete = (input: input, init?: init) => authenticatedFetch(input, { method: "DELETE", ...init });
const authenticatedPatch = (input: input, init?: init) => authenticatedFetch(input, { method: "PATCH", ...init });
const authenticatedPost = (input: input, init?: init) => authenticatedFetch(input, { method: "POST", ...init });

export { authenticatedDelete, authenticatedPatch, authenticatedPost }
export type { init }
export default authenticatedFetch
