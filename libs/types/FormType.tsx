import { BoxProps } from "@mantine/core"
import { PropsWithChildren } from "react"
import { Schema, ZodTypeAny, z } from "zod"
type FormType<schema extends ZodTypeAny >  = PropsWithChildren<{
    initialValues?: Partial<z.TypeOf<schema>>
    schema?: schema
    routeBack?: boolean
}> & BoxProps
export type {FormType}