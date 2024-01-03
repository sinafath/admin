"use client"

import { Form } from "@/app/_components/Form/Form"
import { EditProductAction } from "@/app/_libs/products/actions"
import { EditProductSchema } from "@/app/_libs/products/schema"
import { FormType } from "@/libs/types/FormType"


function EditProductForm(props: FormType<typeof EditProductSchema,typeof EditProductAction>) {
    return <Form routeBack schema={EditProductSchema} action={EditProductAction} {...props} />
}
export default EditProductForm