"use client"


import { Form } from "@/app/_components/Form/Form"
import { addUserAction,editUserAction } from "@/app/_libs/users/actions"
import { AddUserSchema ,EditUserSchema} from "@/app/_libs/users/schema"
import { FormType } from "@/libs/types/FormType"

function AddUserForm(props: FormType<typeof AddUserSchema>) {
    return <Form routeBack schema={AddUserSchema} action={addUserAction} {...props} />
}

function EditUserForm(props: FormType<typeof EditUserSchema>) {
    return <Form routeBack schema={EditUserSchema} action={editUserAction} {...props} />
}

export  {EditUserForm,AddUserForm}
