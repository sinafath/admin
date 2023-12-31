import responseSuccess from "@/libs/types/response"
import { string } from "zod"

type addRouteByIdProps = { password: string, email: string, username: string }
type routeType = {

    id: number,
    address: string,
    method: string,
    description: string,
    deleted: null

}
type deleteActionProps = { id: number }
type getRouteByIdResult = responseSuccess<routeType>
type getRoutesResult = responseSuccess<routeType[]>
export type { addRouteByIdProps, getRouteByIdResult, getRoutesResult, routeType, deleteActionProps }