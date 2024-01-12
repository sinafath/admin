"use client"

import { Form } from "@/app/_components/Form/Form"
import { addRoleAction, editRoleAction } from "@/app/_libs/roles/action"
import { AddRoleSchema, EditRoleSchema } from "@/app/_libs/roles/schema"
import { AddRoleSchemaType, EditRoleSchemaType } from "@/app/_libs/roles/types"
import { FormType } from "@/libs/types/FormType"

type AddRoleFormProps = FormType<AddRoleSchemaType>
type EditRoleFormProps = FormType<EditRoleSchemaType>

function AddRoleForm(props: AddRoleFormProps) {
    return <Form routeBack schema={AddRoleSchema} action={addRoleAction} {...props} />
}

function EditRoleForm(props: EditRoleFormProps) {
    return <Form routeBack schema={EditRoleSchema} action={editRoleAction} {...props} />
}

export { EditRoleForm, AddRoleForm }
