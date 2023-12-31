import { cookies } from "next/headers"

const getNotification = () => cookies().get('notification')

const deleteNotification = () => cookies().delete('notification')
const setNotification = (notification: string) => cookies().set('notification', notification, {
    sameSite: 'strict',
    httpOnly: true,
    secure: process.env.NODE_ENV !== 'development',
    path: '/',
    maxAge: 3,

})

export { deleteNotification, setNotification }
export default getNotification