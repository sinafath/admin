"use client"

import { Form } from "@/app/_components/Form/Form"
import { EditPermissionAction } from "@/app/_libs/permissions/actions"
import { EditPermissionSchema } from "@/app/_libs/permissions/schema"
import { FormType } from "@/libs/types/FormType"


function EditPermissionForm(props: FormType<typeof EditPermissionSchema,typeof EditPermissionAction>) {
    return <Form routeBack schema={EditPermissionSchema} action={EditPermissionAction} {...props} />
}
export default EditPermissionForm