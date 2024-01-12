"use client"

import { Form } from "@/app/_components/Form/Form"
import { addPermissionAction, editPermissionAction } from "@/app/_libs/permissions/action"
import { AddPermissionSchema, EditPermissionSchema } from "@/app/_libs/permissions/schema"
import { AddPermissionSchemaType, EditPermissionSchemaType } from "@/app/_libs/permissions/types"
import { FormType } from "@/libs/types/FormType"

type EditPermissionFormProps = FormType<EditPermissionSchemaType>
type AddPermissionFormProps = FormType<AddPermissionSchemaType>

function AddPermissionForm(props: AddPermissionFormProps) {
    return <Form routeBack schema={AddPermissionSchema} action={addPermissionAction} {...props} />
}

function EditPermissionForm(props: EditPermissionFormProps) {
    return <Form routeBack schema={EditPermissionSchema} action={editPermissionAction} {...props} />
}

export { AddPermissionForm, EditPermissionForm }
