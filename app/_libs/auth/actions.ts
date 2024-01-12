'use server';

import { userLogin, userRole } from './fetch';
import { setAccessToken } from '@/libs/http/cookies/accessToken';
import { setNotification } from '@/libs/http/cookies/notification';
import { deleteAccessToken } from '@/libs/http/cookies/accessToken';
import { loginPropsType } from './types';
;

export async function logoutAction(){
    deleteAccessToken()
    setNotification({message:"عملیات خروج با موفقیت انجام شد",type:"success"})
}

export const login = async function (props:loginPropsType) {
    const data = await userLogin(props)
    setAccessToken(data.data.access_token)
    const role = await userRole(data.data.roles[0].id)
    setAccessToken(role.data.access_token)
}
