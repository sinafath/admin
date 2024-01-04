"use client"

import { Form } from "@/app/_components/Form/Form"
import { addOrderAction,editOrderAction } from "@/app/_libs/orders/actions"
import { AddOrderSchema,EditOrderSchema} from "@/app/_libs/orders/schema"
import { FormType } from "@/libs/types/FormType"


function AddOrderForm(props: FormType<typeof AddOrderSchema>) {
    return <Form routeBack schema={AddOrderSchema} action={addOrderAction} {...props} />
}

function EditOrderForm(props: FormType<typeof EditOrderSchema>) {
    return <Form routeBack schema={EditOrderSchema} action={editOrderAction} {...props} />
}

export { EditOrderForm, AddOrderForm }
