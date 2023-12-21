import { cookies } from "next/headers"

const getAccessToken = () => cookies().get('access_token')
const deleteAccessToken = () => cookies().delete('access_token')
const setAccessToken = (access_token:string) =>    cookies().set('access_token', access_token, {
    httpOnly: true, secure: process.env.NODE_ENV !== 'development',
    sameSite: 'strict',
    path: '/',
})

export { deleteAccessToken, setAccessToken }
export default getAccessToken