import getAccessToken from "../cookies/accessToken"
import { setNotification } from "../cookies/notification"
type init = Omit<RequestInit, "body"> & {
     body?: any
     notification?: boolean | string
} | undefined
type input = URL | RequestInfo
async function authenticatedFetch<data = {}>(input: input, init?: init): Promise<data> {
     const { body, notification, ...customConfig } = init || {}
     function notificationHandler(type: "error" | "success" = "success", message?: string) {
          if (notification === false) return
          if (typeof notification === "string") {
               return setNotification({ type, message: notification });
          }
          if (config.method && ["POST", "DELETE", "PATCH"].includes(config.method)) {
               return setNotification({ type, message: "عملیات با موفقیت انجام شد" });

          }
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
          ...config
     })
          .then(async response => {
               const data = await response.json()
               console.log({ url: `${process.env.API_URL}${input}`, config, data: data, mes: data?.errors?.message, notification })

               if (response.ok) {
                    notificationHandler()
                    return data
               } else {
                    if (Array.isArray(data?.errors?.message)) {
                         const message = data.errors.message?.[0] ?? "خطا سرور"
                         setNotification({
                              type: "error", message
                         })
                         return Promise.reject(new Error(message))

                    }
                    const message = data?.errors?.message ?? "خطا سرور"
                    setNotification({
                         type: "error", message
                    })
                    return Promise.reject(new Error(message))
               }
          })
}
const authenticatedDelete = (input: input, init?: init) => authenticatedFetch(input, { method: "DELETE", ...init });
const authenticatedPatch = (input: input, init?: init) => authenticatedFetch(input, { method: "PATCH", ...init });
const authenticatedPost = (input: input, init?: init) => authenticatedFetch(input, { method: "POST", ...init });

export { authenticatedDelete, authenticatedPatch, authenticatedPost }
export type { init }
export default authenticatedFetch
