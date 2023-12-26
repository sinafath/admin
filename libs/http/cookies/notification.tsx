import { cookies } from "next/headers"

const getNotification = () => cookies().get('notification')

const deleteNotification = () => cookies().delete('notification')
const setNotification = (notification: string) => cookies().set('notification', notification, {
    sameSite: 'strict',
    path: '/',
})

export { deleteNotification, setNotification }
export default getNotification