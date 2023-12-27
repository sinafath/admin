"use client"
import {
    Paper,
    TextInput,
    Title,
} from '@mantine/core';
import classes from './Login.module.css';
import { login } from '../_libs/auth/actions';
import Button from '../_components/Form/Submit';
import PasswordInput from '../_components/Form/PasswordInput';
import { Form } from '../_components/Form/Form';



function AuthenticationImage() {
    return (
        <div className={classes.wrapper}>
            <Paper className={classes.form} radius={0} p={30}>
                <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
                    به پنل ادمین خوش آمدید
                </Title>
                <Form action={login}>
                    <TextInput label="ایمیل" placeholder="hello@gmail.com" size="md" />
                    <PasswordInput />
                    <Button>
                        ورود
                    </Button>
                </Form >
            </Paper>
        </div>
    );
}
export default AuthenticationImage