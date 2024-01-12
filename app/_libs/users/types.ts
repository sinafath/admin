import idType from "@/libs/types/idType"
import responseSuccessType, { responseSuccessPagination } from "@/libs/types/responseType"
import { AddUserSchema, EditUserSchema } from "./schema"

type addUserActionProps = { password: string, email: string, username: string }
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
type EditUserActionProps = addUserActionProps & idType


type AddUserSchemaType = typeof AddUserSchema
type EditUserSchemaType = typeof EditUserSchema

export type { addUserActionProps, AddUserSchemaType,
   EditUserSchemaType, EditUserActionProps, getUserByIdResult, 
   getAllUsersResult, getUsersResult, 
   userType, 
  deleteActionProps }
