import { TextInput } from '@mantine/core';
import { createFormContext } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { PropsWithChildren, useEffect } from 'react';
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
}>
const [FormProvider, useFormContext, useForm] =
    createFormContext<{}>();
function Form({ initialValues, children, action }: FormProps) {
    const [state, dispatch] = useFormState<action>(action as (state: state) => action | Promise<action>, null)
    const { errors, message, statusCode } = state || {}
    const withInitialValue = initialValues ? {
        initialValues
    } : {}
    const form = useForm(withInitialValue)
    useEffect(() => {
        errors && form.setErrors(errors)
        message && form.setFieldError("message", message)
        statusCode === 500 && message && notifications.show({
            autoClose: 4000,
            title: 500,
            message,
        })
        return form.clearErrors()
    }, [errors, message])
    return (
        <FormProvider form={form}>
            <form action={dispatch}>
                {children}
            </form>
        </FormProvider>
    );
}
export { useFormContext, Form }