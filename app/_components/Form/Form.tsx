"use client"

import { Box, BoxProps, Text } from '@mantine/core';
import { createFormContext } from '@mantine/form';
import { PropsWithChildren, useEffect } from 'react';
import { useAction } from "next-safe-action/hook";
import { SafeAction } from 'next-safe-action/.';
import { z } from 'zod';
import { useRouter } from 'next/navigation';

type FormProps<Schema extends z.ZodTypeAny, data> = PropsWithChildren<{
    initialValues?: Partial<z.TypeOf<Schema>>
    action: SafeAction<Schema, data>
    routeBack?:boolean
}> & BoxProps
const [FormProvider, useFormContext, useForm] =
    createFormContext<{}>();
function Form<Schema extends z.ZodTypeAny, data>({ initialValues, children, action,routeBack, ...props }: FormProps<Schema, data>) {
    const withInitialValue = initialValues ? {
        initialValues
    } : {}
    const form = useForm(withInitialValue)
    const { execute, result,status } = useAction(action)
    const route = useRouter()
    
    useEffect(() => {
        result.validationError && form.setErrors(result.validationError)
        if(status === "hasSucceeded" && routeBack) {
            route.back()
        }
    }, [result && status])
    return (
        <FormProvider form={form}>
            <Box component='form' action={() =>  execute(form.values)} {...props}>
                {children}
            </Box>
            <Text c="red" pt={10}>
                {result.serverError}
            </Text >
        </FormProvider>
    );
}
export type {FormProps}
export { useFormContext, Form }