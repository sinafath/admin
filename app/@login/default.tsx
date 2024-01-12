"use client"
import {
    Paper,
    Title,
} from '@mantine/core';
import classes from './Login.module.css';
import Button from '../_components/Form/Submit';
import PasswordInput from '../_components/Form/Inputs/PasswordInput';
import { Form } from '../_components/Form/Form';
import EmailInput from '../_components/Form/Inputs/EmailInput';
import { LoginSchema } from '../_libs/auth/schema';
import { login } from '../_libs/auth/actions';



function AuthenticationImage() {
    return (
        <div className={classes.wrapper}>
            <Paper className={classes.form} radius={0} p={30}>
                <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
                    به پنل ادمین خوش آمدید
                </Title>
                <Form action={login} schema={LoginSchema}>
                    <EmailInput />
                    <PasswordInput/>
                    <Button>
                        ورود
                    </Button>
                </Form >
            </Paper>
        </div>
    );
}
export default AuthenticationImage