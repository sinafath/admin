'use server';

import {userLogin, userRole} from './data';
import { LoginSchema, LoginSchemaType } from './validation';
import { stateLogin } from './types';
import { setAccessToken } from '@/libs/http/cookies/accessToken';
import { setNotification } from '@/libs/http/cookies/notification';
import { deleteAccessToken } from '@/libs/http/cookies/accessToken';
import revalidateAll from '@/libs/http/revalidateAll/revalidateAll';
import middlewares from '@/libs/middleware/middleware';
;

export async function logout(): Promise<undefined> {
    deleteAccessToken()
    setNotification("عملیات خروج با موفقیت انجام شد")
    revalidateAll()
}

export const login = middlewares(async function (formData: {}): Promise<stateLogin> {
    const data = await userLogin(formData as LoginSchemaType)
    setAccessToken(data.data.access_token)

    const role = await userRole(data.data.roles[0].id)
    console.log({role})
    setAccessToken(role.data.access_token)
},
    { schema: LoginSchema, revalidateAll: true }
)