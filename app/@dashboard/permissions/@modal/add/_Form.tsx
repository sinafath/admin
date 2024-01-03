"use client"

import { Form } from "@/app/_components/Form/Form"
import { addPermissionAction } from "@/app/_libs/permissions/actions"
import { AddPermissionSchema } from "@/app/_libs/permissions/schema"
import { FormType } from "@/libs/types/FormType"


function AddPermissionForm(props: FormType<typeof AddPermissionSchema,typeof addPermissionAction>) {
    return <Form routeBack schema={AddPermissionSchema} action={addPermissionAction} {...props} />
}
export default AddPermissionForm