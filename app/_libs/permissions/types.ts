import responseSuccessType, { responseSuccessPagination } from "@/libs/types/responseType"
import { AddPermissionSchema, EditPermissionSchema } from "./schema"

type addPermissionActionProps = {
  name: string,
  roleId: number,
  routeIds: number[],
  read: string
}
type permissionType = {
  id: 2,
  name: string,
  deleted: null,
  read: string
}
type getPermissionByIdResult = responseSuccessType<permissionType>
type getAllPermissionResult = responseSuccessType<permissionType[]>
type getPermissionsPageResult = responseSuccessPagination<permissionType[]>
type AddPermissionSchemaType = typeof AddPermissionSchema
type EditPermissionSchemaType = typeof EditPermissionSchema

export type { addPermissionActionProps, EditPermissionSchemaType, AddPermissionSchemaType, 
  getPermissionByIdResult, getPermissionsPageResult, getAllPermissionResult, permissionType }