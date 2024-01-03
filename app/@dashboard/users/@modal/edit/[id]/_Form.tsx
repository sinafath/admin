"use client"


import { Form } from "@/app/_components/Form/Form"
import { editUserAction } from "@/app/_libs/users/actions"
import { EditUserSchema } from "@/app/_libs/users/schema"
import { FormType } from "@/libs/types/FormType"

function EditUserForm(props: FormType<typeof EditUserSchema,typeof editUserAction>) {
    return <Form routeBack schema={EditUserSchema} action={editUserAction} {...props} />
}

export default EditUserForm