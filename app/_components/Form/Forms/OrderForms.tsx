"use client"

import { Form } from "@/app/_components/Form/Form"
import { addOrderAction, editOrderAction } from "@/app/_libs/orders/action"
import { AddOrderSchema,EditOrderSchema} from "@/app/_libs/orders/schema"
import { AddOrderSchemaType, EditOrderSchemaType } from "@/app/_libs/orders/types"
import { FormType } from "@/libs/types/FormType"

type EditPermissionFormProps = FormType<EditOrderSchemaType>
type AddPermissionFormProps = FormType<AddOrderSchemaType>

function AddOrderForm(props: AddPermissionFormProps) {
    return <Form routeBack schema={AddOrderSchema} action={addOrderAction} {...props} />
}

function EditOrderForm(props: EditPermissionFormProps) {
    return <Form routeBack schema={EditOrderSchema} action={editOrderAction} {...props} />
}

export { EditOrderForm, AddOrderForm }
