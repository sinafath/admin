"use client"

import { Form } from "@/app/_components/Form/Form"
import { editOrderAction } from "@/app/_libs/orders/actions"
import { EditOrderSchema } from "@/app/_libs/orders/schema"
import { FormType } from "@/libs/types/FormType"


function EditOrderForm(props: FormType<typeof EditOrderSchema,typeof editOrderAction>) {
    return <Form routeBack schema={EditOrderSchema} action={editOrderAction} {...props} />
}
export default EditOrderForm