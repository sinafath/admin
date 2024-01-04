"use client"

import { Form } from "@/app/_components/Form/Form"
import { addPermissionAction, EditPermissionAction } from "@/app/_libs/permissions/actions"
import { AddPermissionSchema, EditPermissionSchema } from "@/app/_libs/permissions/schema"
import { FormType } from "@/libs/types/FormType"

function AddPermissionForm(props: FormType<typeof AddPermissionSchema>) {
    return <Form routeBack schema={AddPermissionSchema} action={addPermissionAction} {...props} />
}

function EditPermissionForm(props: FormType<typeof EditPermissionSchema>) {
    return <Form routeBack schema={EditPermissionSchema} action={EditPermissionAction} {...props} />
}

export { AddPermissionForm, EditPermissionForm }
