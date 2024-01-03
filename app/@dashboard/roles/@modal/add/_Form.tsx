"use client"


import { Form } from "@/app/_components/Form/Form"
import { addRoleAction } from "@/app/_libs/roles/actions"
import { AddRoleSchema } from "@/app/_libs/roles/schema"
import { FormType } from "@/libs/types/FormType"


function AddRoleForm(props: FormType<typeof AddRoleSchema,typeof addRoleAction>) {
    return <Form routeBack schema={AddRoleSchema} action={addRoleAction} {...props} />
}
export default AddRoleForm