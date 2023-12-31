"use server"

import { addPermission, deletePermissionById, editPermissionById } from "./fetch"
import action from "@/libs/utils/safeAction/safeAction"
import HasIDSchema from "@/libs/schema/HasIDSchema"
import { AddPermissionSchema, EditPermissionSchema } from "./schema"


export const EditPermissionAction = action(EditPermissionSchema, async function (props) {
    const data = await editPermissionById(props)
    return data
}
)

export const addPermissionAction = action(AddPermissionSchema, async function (props) {
    const data = await addPermission(props)
    return data
}
)

export const DeletePermissionAction =  action(HasIDSchema, async function (props) {
    const data = await deletePermissionById(props)
    return data
})

