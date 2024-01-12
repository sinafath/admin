import responseSuccessType, { responseSuccessPagination } from "@/libs/types/responseType"
import { AddRoleSchema, EditRoleSchema } from "./schema"

type editRoleActionProps = { id?: number, name?: String, defaultValue?: boolean | undefined }
type roleType = {
  id: 0,
  deleted: string,
  durationTime: number | null,
  name: string,
  userId: 0,
  assignee: {
    id: 0,
    deleted: false,
    email: string,
    username: string,
    password: string
  }
}
type getRoleByIdResult = responseSuccessType<roleType>
type getAllRolesResult = responseSuccessType<roleType[]>
type getRolesPageResult = responseSuccessPagination<roleType[]>
type addRoleActionProps = editRoleActionProps
type AddRoleSchemaType = typeof AddRoleSchema
type EditRoleSchemaType = typeof EditRoleSchema

export type { editRoleActionProps, getRoleByIdResult, AddRoleSchemaType, EditRoleSchemaType, getRolesPageResult, roleType, getAllRolesResult, addRoleActionProps }