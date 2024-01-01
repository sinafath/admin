import responseSuccessType, { responseSuccessPagination } from "@/libs/types/responseType"

type addPermissionProps = {
  name: string,
  roleId: number,
  routeIds: number[],
  read: string
}
type permissionType =   {
  id: 2,
  name: string,
  deleted: null,
  read: string
}
type getPermissionByIdResult = responseSuccessType<permissionType>
type getAllPermissionResult = responseSuccessType<permissionType[]>
type getPermissionsResult = responseSuccessPagination<permissionType[]>

export type { addPermissionProps, getPermissionByIdResult, getPermissionsResult,getAllPermissionResult, permissionType }