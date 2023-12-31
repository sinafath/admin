"use server"

import { addUser, deleteUserById, editUserById } from "./fetch"
import { EditUserSchema ,AddUserSchema} from "./schema"
import action from "@/libs/utils/safeAction/safeAction"
import { deletePropsActionProps } from "./types"
import revalidateAll from "@/libs/utils/revalidateAll/revalidateAll"
import HasIDSchema from "@/libs/schema/HasIDSchema"


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

export const DeleteUserAction =  action(HasIDSchema, async function (props: deletePropsActionProps) {
    const data = await deleteUserById(props)
    return data
})
