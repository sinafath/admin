'use server';

import { userLogin, userRole } from './fetch';
import { LoginSchema } from './schema';
import { setAccessToken } from '@/libs/http/cookies/accessToken';
import { setNotification } from '@/libs/http/cookies/notification';
import { deleteAccessToken } from '@/libs/http/cookies/accessToken';
import revalidateAll from '@/libs/utils/revalidateAll/revalidateAll';
import action from '@/libs/utils/safeAction/safeAction';
;

export async function logoutAction(){
    deleteAccessToken()
    setNotification("عملیات خروج با موفقیت انجام شد")
    revalidateAll()
}

export const login = action(LoginSchema, async function (props) {
    const data = await userLogin(props)
    setAccessToken(data.data.access_token)
    const role = await userRole(data.data.roles[0].id)
    console.log({ role })
    setAccessToken(role.data.access_token)
}
)