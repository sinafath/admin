"use server"

import { addRole, deleteRoleById, editRoleById } from "./fetch"
import { EditRoleSchema ,AddRoleSchema} from "./schema"
import action from "@/libs/utils/safeAction/safeAction"
import { deletePropsActionProps } from "./types"
import revalidateAll from "@/libs/utils/revalidateAll/revalidateAll"
import { redirect } from "next/navigation"
import { deleteUserById } from "../users/fetch"


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

export const DeleteRoleAction = async function (props: deletePropsActionProps) {
    revalidateAll()
    const data = await deleteRoleById(props)
    return data
}

