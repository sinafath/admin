import { cookies } from "next/headers"

const getNotification = () => JSON.parse(cookies().get('notification')?.value ?? "{}") as { type?: "error" | "success", message?: string }

const deleteNotification = () => cookies().delete('notification')
const setNotification = (notification: { type: "error" | "success", message: string }) => cookies().set('notification', JSON.stringify(notification), {
    sameSite: 'strict',
    httpOnly: true,
    secure: process.env.NODE_ENV !== 'development',
    path: '/',
    maxAge: 2,

})

export { deleteNotification, setNotification }
export default getNotification