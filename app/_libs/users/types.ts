import responseSuccess from "@/libs/types/response"

type addUserByIdProps = { password: string, email: string, username:string }
type userType = {
  id: number,
  email: string,
  password: string,
  username: string,
  deleted: null
}
type deletePropsActionProps = { id: number }
type getUserByIdResult = responseSuccess<userType>
type getUsersResult = responseSuccess<userType[]>
export type { addUserByIdProps, getUserByIdResult, getUsersResult, userType, deletePropsActionProps }