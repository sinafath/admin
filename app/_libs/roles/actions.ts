"use server"

import { addRole, deleteRoleById, editRoleById } from "./fetch"
import { EditRoleSchema ,AddRoleSchema} from "./schema"
import action from "@/libs/http/safeAction/safeAction"
import HasIDSchema from "@/libs/Zod/schema/IDSchema"


export const EditRoleAction = action(EditRoleSchema, async function (props) {
    const data = await editRoleById(props)
    return data
}
)

export const addRoleAction = action(AddRoleSchema, async function (props) {
    const data = await addRole(props)
    return data
}
)

export const DeleteRoleAction = action(HasIDSchema,async function (props) {
    const data = await deleteRoleById(props)
    return data
})

