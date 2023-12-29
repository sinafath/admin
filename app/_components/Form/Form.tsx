"use client"

import objectToFormData from '@/libs/converts/objectToFormData/objectToFormData';
import { Box, BoxProps, Text, TextInput } from '@mantine/core';
import { createFormContext } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { useRouter } from 'next/navigation';
import { PropsWithChildren, useEffect, useTransition } from 'react';
import { useFormState } from 'react-dom';

type state = {
    errors?: {}
    statusCode?: number
    message?: string
} | null
type action = Promise<state>
type FormProps = PropsWithChildren<{
    initialValues?: {}
    action: any
    variables?:{}
    redirect?:string
}> & BoxProps
const [FormProvider, useFormContext, useForm] =
    createFormContext<{}>();
function Form({ initialValues, children, action,variables,redirect,...props }: FormProps) {
    const [state, dispatch] = useFormState<action>(action as (state: state) => action | Promise<action>, null)
    const { errors, message, statusCode } = state || {}
    const [, startTransition] = useTransition();

    const {push,refresh} = useRouter()
    console.log({initialValues})
    const withInitialValue = initialValues ? {
        initialValues
    } : {}
    const form = useForm(withInitialValue)
    useEffect(() => {
        errors && form.setErrors(errors)
        statusCode === 500 && message && notifications.show({
            autoClose: 4000,
            title: 500,
            message,
        })
    }, [errors, message])
    return (
        <FormProvider form={form}>
            <Box component='form' {...props} action={action} >
                {children}
            </Box>
            <Text c="red" pt={10}>
                {message}
            </Text >
        </FormProvider>
    );
}
export { useFormContext, Form }