import responseSuccessType, { responseSuccessPagination } from "@/libs/types/responseType"

type addUserByIdProps = { password: string, email: string, username:string }
type userType = {
  id: number,
  email: string,
  password: string,
  username: string,
  deleted: null
}
type deleteActionProps = { id: number }
type getUserByIdResult = responseSuccessType<userType>
type getAllUsersResult = responseSuccessType<userType[]>
type getUsersResult = responseSuccessPagination<userType[]>
export type { addUserByIdProps, getUserByIdResult,getAllUsersResult, getUsersResult, userType, deleteActionProps }