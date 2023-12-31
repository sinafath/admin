"use server"

import action from "@/libs/utils/safeAction/safeAction"
import { AddProductSchema, EditProductSchema } from "./schema"
import { addProduct, editProductById } from "./fetch"

export const EditProductAction = action(EditProductSchema, async function (props) {
    const data = await editProductById(props)
    return data
}
)
export const AddProductAction = action(AddProductSchema, async function (props) {
    const data = await addProduct(props)
    return data
}
)