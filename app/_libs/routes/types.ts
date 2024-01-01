import responseSuccessType, { responseSuccessPagination } from "@/libs/types/responseType"
import { string } from "zod"

type addRouteByIdProps = { password: string, email: string, username: string }
type routeType = {

    id: number,
    address: string,
    method: "GET" | "POST" | "DELETE" | "PATCH" | "PUT",
    description: string,
    deleted: null

}
type deleteActionProps = { id: number }
type getRouteByIdResult = responseSuccessType<routeType>
type getAllRoutesResult = responseSuccessType<routeType[]>

type getRoutesResult = responseSuccessPagination<routeType[]>
export type { addRouteByIdProps, getRouteByIdResult,getAllRoutesResult, getRoutesResult, routeType, deleteActionProps }