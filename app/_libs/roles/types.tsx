import response from "@/libs/http/response/response"

type PostroleResult = {}
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

type getRoleByIdResult = response<roleType>
type getRolesResult = response<roleType[]>
export type { PostroleResult, getRoleByIdResult, getRolesResult }