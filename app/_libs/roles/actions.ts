"use server"

import { addRole, deleteRoleById, editRoleById } from "./fetch"
import { EditRoleSchema ,AddRoleSchema} from "./schema"
import action from "@/libs/utils/safeAction/safeAction"
import revalidateAll from "@/libs/utils/revalidateAll/revalidateAll"
import HasIDSchema from "@/libs/schema/HasIDSchema"


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
    revalidateAll()
    const data = await deleteRoleById(props)
    return data
})

