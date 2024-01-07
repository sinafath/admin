"use client"

import { Form } from "@/app/_components/Form/Form"
import { addRoleAction, editRoleAction } from "@/app/_libs/roles/actions"
import { AddRoleSchema, EditRoleSchema } from "@/app/_libs/roles/schema"
import { FormType } from "@/libs/types/FormType"

function AddRoleForm(props: FormType<typeof AddRoleSchema>) {
    return <Form routeBack schema={AddRoleSchema} action={addRoleAction} {...props} />
}

function EditRoleForm(props: FormType<typeof EditRoleSchema>) {
    return <Form routeBack schema={EditRoleSchema} action={editRoleAction} {...props} />
}

export { EditRoleForm, AddRoleForm }
