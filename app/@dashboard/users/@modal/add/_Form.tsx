"use client"


import { Form } from "@/app/_components/Form/Form"
import { addUserAction } from "@/app/_libs/users/actions"
import { AddUserSchema } from "@/app/_libs/users/schema"
import { FormType } from "@/libs/types/FormType"

function AdduserForm(props: FormType<typeof AddUserSchema,typeof addUserAction>) {
    return <Form routeBack schema={AddUserSchema} action={addUserAction} {...props} />
}

export default AdduserForm