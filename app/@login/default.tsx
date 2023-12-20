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
import { login, stateLogin } from './libs/actions';
import { usePathname } from 'next/navigation';
import { useFormState } from 'react-dom';

function AuthenticationImage() {

    const pathname = usePathname()
    const loginWithPath = login.bind(null, pathname)
    const [state, dispatch] = useFormState(loginWithPath, null)
    console.log({state})
    return (
        <div className={classes.wrapper}>
            <Paper className={classes.form} radius={0} p={30}>
                <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
                    به پنل ادمین خوش آمدید
                </Title>
                <form action={dispatch}>
                    <TextInput name='email' label="ایمیل" error={state?.errors?.email} placeholder="hello@gmail.com" size="md" />
                    <PasswordInput name='password' label="رمز عبور"  error={state?.errors?.password}  placeholder="رمز عبور" mt="md" size="md" />
                    <Button fullWidth mt="xl" size="md" type='submit'>
                        ورود
                    </Button>
                </form >
            </Paper>
        </div>
    );
}
export default AuthenticationImage