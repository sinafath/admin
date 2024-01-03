import { FormProps } from "@/app/_components/Form/Form"
import { SafeAction as NextSafeAction } from "next-safe-action/."
import { ZodTypeAny } from "zod"
type FormType<schema extends ZodTypeAny, safeActions extends NextSafeAction<schema,{}> > = Omit<FormProps< schema, Awaited<ReturnType<safeActions> >["data"]>, "schema" | "action">
export type {FormType}