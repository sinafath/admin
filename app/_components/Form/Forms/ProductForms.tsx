"use client"

import { Form } from "@/app/_components/Form/Form"
import { addProductAction, editProductAction } from "@/app/_libs/products/action"
import { AddProductSchema, EditProductSchema } from "@/app/_libs/products/schema"
import { AddProductSchemaType, EditProductSchemaType } from "@/app/_libs/products/types"
import { FormType } from "@/libs/types/FormType"

type EditProductFormProps = FormType<EditProductSchemaType>
type AddProductFormProps = FormType<AddProductSchemaType>

function AddProductForm(props: AddProductFormProps) {
    return <Form routeBack schema={AddProductSchema} action={addProductAction} {...props} />
}

function EditProductForm(props: EditProductFormProps) {
    return <Form routeBack schema={EditProductSchema} action={editProductAction} {...props} />
}

export { AddProductForm, EditProductForm }
