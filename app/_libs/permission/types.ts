import responseSuccess from "@/libs/types/response"

type addPermissionProps = {
  name: string,
  roleId: string,
  routeIds: string[],
  read: string
}
type permissionType =   {
  id: 2,
  name: string,
  deleted: null,
  read: string
}
type getUserByIdResult = responseSuccess<permissionType>
type getUsersResult = responseSuccess<permissionType[]>
export type { addPermissionProps, getUserByIdResult, getUsersResult, permissionType }