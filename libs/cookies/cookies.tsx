import { cookies } from "next/headers"

const getAccessToken = () => cookies().get('access_token')

export default getAccessToken