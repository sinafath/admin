import { cookies } from "next/headers"

const getAccessToken = () => cookies().get('access_token')
const deleteAccessToken = () => cookies().delete('access_token')

export {deleteAccessToken}
export default getAccessToken