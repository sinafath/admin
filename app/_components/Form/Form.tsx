"use client"

import { Box, BoxProps, Text } from '@mantine/core';
import { createFormContext, zodResolver } from '@mantine/form';
import { PropsWithChildren, useEffect } from 'react';
import { z } from 'zod';
import { useRouter } from 'next/navigation';
import { ActionProvider } from './ActionContext';
import { init } from '@/libs/http/fetch/fetch';
import useAction from '@/libs/hooks/useAction';

type FormProps<Schema extends z.ZodTypeAny> = PropsWithChildren<{
    initialValues?: Partial<z.infer<Schema>>
    action: (data: z.infer<Schema>, init?: init) => Promise<{}>;
    schema?: Schema
    routeBack?: boolean
}> & BoxProps


const [FormProvider, useFormContext, useForm] =
    createFormContext<{}>();
    
function Form<Schema extends z.ZodTypeAny>({ initialValues
    , schema, children,
    action, routeBack, ...props }: FormProps<Schema>) {
    const { status, execute, serverError } = useAction(action)
    const form = useForm({ validate: schema && zodResolver(schema), initialValues })
    const route = useRouter()
    useEffect(() => {
        if (status === "hasSucceeded" && routeBack) {
            route.back()
        }
    }, [status])
    return (
        <ActionProvider value={status}>
            <FormProvider form={form}>
                <Box component='form' onSubmit={form.onSubmit(execute)} {...props}>
                    {children}
                </Box>
                <Text c="red" pt={10}>
                    {serverError}
                </Text >
            </FormProvider>
        </ActionProvider>
    );
}
export type { FormProps }
export { useFormContext, Form, }