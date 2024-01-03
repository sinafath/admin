"use client"

import { FormProps } from "@/app/_components/Form/Form"
import { Form } from "@/app/_components/Form/Form"
import { editRoleAction } from "@/app/_libs/roles/actions"
import { EditRoleSchema } from "@/app/_libs/roles/schema"
import { FormType } from "@/libs/types/FormType"
import { BoxProps } from "@mantine/core"
import { PropsWithChildren } from "react"
import { z } from "zod"


function EditRoleForm<data>(props: FormType<typeof EditRoleSchema,typeof editRoleAction>) {
    return <Form routeBack schema={EditRoleSchema} action={editRoleAction} {...props} />
}
export default EditRoleForm