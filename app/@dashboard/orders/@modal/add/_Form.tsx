"use client"

import { Form } from "@/app/_components/Form/Form"
import { addOrderAction } from "@/app/_libs/orders/actions"
import { AddOrderSchema } from "@/app/_libs/orders/schema"
import { FormType } from "@/libs/types/FormType"


function AddOrderForm(props: FormType<typeof AddOrderSchema,typeof addOrderAction>) {
    return <Form routeBack schema={AddOrderSchema} action={addOrderAction} {...props} />
}
export default AddOrderForm