"use client"

import { Form } from "@/app/_components/Form/Form"
import { AddProductAction } from "@/app/_libs/products/actions"
import { AddProductSchema } from "@/app/_libs/products/schema"
import { FormType } from "@/libs/types/FormType"


function AddProductForm(props: FormType<typeof AddProductSchema,typeof AddProductAction>) {
    return <Form routeBack schema={AddProductSchema} action={AddProductAction} {...props} />
}
export default AddProductForm