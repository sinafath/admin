import responseSuccess from "@/libs/types/response"

type editRoleByIdProps = { id?: number, name?: String, defaultValue?: boolean | undefined }
type roleType = {
    id: 0,
    deleted: string,
    durationTime: 0,
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
  type  getRoleByIdResult = responseSuccess<roleType>
  type getRolesResult = responseSuccess<roleType[]>
  export type {editRoleByIdProps,getRoleByIdResult,getRolesResult,roleType}