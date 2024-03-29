"use client"
import { IconLogout } from '@tabler/icons-react';
import classes from './Footer.module.css';
import { useFormState, useFormStatus } from 'react-dom';
import { IconLoader } from '@tabler/icons-react';
import { logoutAction } from '@/app/_libs/auth/actions';

function LogoutButton() {
    const { pending } = useFormStatus()
    return (
        <button type="submit" className={classes.link}>
            {
                pending ? <IconLoader className={classes.linkIcon} stroke={1.5} />
                    :
                    <IconLogout className={classes.linkIcon} stroke={1.5} />
            }
            <span>خروج</span>
        </button>
    )
}
function Footer() {
    const [state, dispatch] = useFormState(logoutAction, null)
    return (
        <div className={classes.footer}>
            <form action={dispatch}>
                <LogoutButton />

            </form>
        </div>
    )
}
export default Footer