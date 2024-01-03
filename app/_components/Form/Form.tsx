"use client"

import { Box, BoxProps, Text } from '@mantine/core';
import { createFormContext, zodResolver } from '@mantine/form';
import { PropsWithChildren, useEffect } from 'react';
import { useAction } from "next-safe-action/hook";
import { SafeAction } from 'next-safe-action/.';
import { z } from 'zod';
import { useRouter } from 'next/navigation';
import { ActionProvider } from './ActionContext';

type FormProps<Schema extends z.ZodTypeAny, data> = PropsWithChildren<{
    initialValues?: Partial<z.TypeOf<Schema>>
    action: SafeAction<Schema, data>
    schema?: Schema
    routeBack?: boolean
}> & BoxProps


const [FormProvider, useFormContext, useForm] =
    createFormContext<{}>();
function Form<Schema extends z.ZodTypeAny, data>({ initialValues,schema, children, action, routeBack, ...props }: FormProps<Schema, data>) {
    const withInitialValue = initialValues ? {
        initialValues
    } : {}
    const { execute, result, status } = useAction(action)
    const form = useForm({ validate: schema ? zodResolver(schema) : undefined, ...withInitialValue, })
    const route = useRouter()

    useEffect(() => {
        if (status === "hasSucceeded" && routeBack) {
            route.back()
        }
    }, [result && status])
    return (
        <ActionProvider value={status}>
            <FormProvider form={form}>
                <Box component='form' onSubmit={form.onSubmit(execute)} {...props}>
                    {children}
                </Box>
                <Text c="red" pt={10}>
                    {result.serverError}
                </Text >
            </FormProvider>
        </ActionProvider>
    );
}
export type { FormProps }
export { useFormContext, Form, }