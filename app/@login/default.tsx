"use client"
import {
    Paper,
    TextInput,
    PasswordInput,
    Checkbox,
    Button,
    Title,
    Text,
    Anchor,
} from '@mantine/core';
import classes from './Login.module.css';
import { login } from './libs/actions';
import { useFormState, useFormStatus } from 'react-dom';
import { useEffect } from 'react';
import { notifications } from '@mantine/notifications';

function SubmitButton() {
    const { pending } = useFormStatus()
    return (
        <Button fullWidth mt="xl" size="md" type='submit' loading={pending}>
            ورود
        </Button>
    )
}

function AuthenticationImage() {
    const [state, dispatch] = useFormState(login, null)
    useEffect(() => {
        state?.statusCode === 401 && state?.statusCode === 401 && notifications.show({
            title: state?.message,
            message: state?.message,
        })
    }, [state])
    return (
        <div className={classes.wrapper}>
            <Paper className={classes.form} radius={0} p={30}>
                <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
                    به پنل ادمین خوش آمدید
                </Title>
                <form action={dispatch}>
                    <TextInput name='email' label="ایمیل" error={state?.errors?.email} placeholder="hello@gmail.com" size="md" />
                    <PasswordInput name='password' label="رمز عبور" error={state?.errors?.password} placeholder="رمز عبور" mt="md" size="md" />
                    <SubmitButton />
                </form >
            </Paper>
        </div>
    );
}
export default AuthenticationImage