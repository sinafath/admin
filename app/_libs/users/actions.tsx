"use server"

import { addUser, deleteUserById, editUserById } from "./fetch"
import { EditUserSchema ,AddUserSchema} from "./schema"
import action from "@/libs/http/safeAction/safeAction"
import { deleteActionProps } from "./types"
import HasIDSchema from "@/libs/Zod/schema/IDSchema"


export const EditUserAction = action(EditUserSchema, async function (props) {
    const data = await editUserById(props)
    return data
}
)

export const addUserAction = action(AddUserSchema, async function (props) {
    const data = await addUser(props)
    return data
}
)

export const DeleteUserAction =  action(HasIDSchema, async function (props: deleteActionProps) {
    const data = await deleteUserById(props)
    return data
})

