"use server"

import { addOrder, deleteOrderById, editOrderById } from "./fetch"
import { EditOrderSchema ,AddOrderSchema} from "./schema"
import action from "@/libs/http/safeAction/safeAction"
import HasIDSchema from "@/libs/Zod/schema/IDSchema"


export const editOrderAction = action(EditOrderSchema, async function (props) {
    const data = await editOrderById(props)
    return data
}
)

export const addOrderAction = action(AddOrderSchema, async function (props) {
    const data = await addOrder(props)
    return data
}
)

export const deleteOrderAction = action(HasIDSchema,async function (props) {
    const data = await deleteOrderById(props)
    return data
})

