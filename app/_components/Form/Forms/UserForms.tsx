"use client"


import { Form } from "@/app/_components/Form/Form"
import { addUserAction, editUserAction } from "@/app/_libs/users/action"
import { AddUserSchema ,EditUserSchema} from "@/app/_libs/users/schema"
import { AddUserSchemaType, EditUserSchemaType } from "@/app/_libs/users/types"
import { FormType } from "@/libs/types/FormType"

type AddUserFormProps = FormType<AddUserSchemaType>
type EditUserFormProps = FormType<EditUserSchemaType>

function AddUserForm(props: AddUserFormProps) {
    return <Form routeBack schema={AddUserSchema} action={addUserAction} {...props} />
}

function EditUserForm(props: EditUserFormProps) {
    return <Form routeBack schema={EditUserSchema} action={editUserAction} {...props} />
}

export  {EditUserForm,AddUserForm}
