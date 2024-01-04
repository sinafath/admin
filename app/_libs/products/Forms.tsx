"use client"

import { Form } from "@/app/_components/Form/Form"
import { AddProductAction, EditProductAction } from "@/app/_libs/products/actions"
import { AddProductSchema, EditProductSchema } from "@/app/_libs/products/schema"
import { FormType } from "@/libs/types/FormType"

function AddProductForm(props: FormType<typeof AddProductSchema>) {
    return <Form routeBack schema={AddProductSchema} action={AddProductAction} {...props} />
}

function EditProductForm(props: FormType<typeof EditProductSchema>) {
    return <Form routeBack schema={EditProductSchema} action={EditProductAction} {...props} />
}

export { AddProductForm, EditProductForm }
