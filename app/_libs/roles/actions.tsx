"use server"

import middlewares from "@/libs/middleware/middleware"
import { editRoleById } from "./data"
import { EditRoleschema } from "./validation"
import { redirect } from "next/navigation"

type variablesType = {
    id: string
}
type data = {
    name: string
}
export const EditRoleAction = middlewares(async function ({ name }: data, variables: variablesType) {
    const { id } = variables
    console.log({variables,name})
    const data = await editRoleById(Number(id), name)
    return data
},
    { schema: EditRoleschema, revalidateAll: true}
)

export const EditRoleAction2 = async function () {
  
    redirect("/rokes")
}