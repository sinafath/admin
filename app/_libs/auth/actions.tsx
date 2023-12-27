'use server';

import { revalidatePath } from 'next/cache';
import userLogin from './data';
import validateLoginData, { LoginFormSchema } from './validation';
import { errorResult, stateLogin, stateLogout } from './types';
import { setAccessToken } from '@/libs/http/cookies/accessToken';
import serializeFormData from '@/libs/utils/serializeFormData/serializeFormData';
import { setNotification } from '@/libs/http/cookies/notification';

import { deleteAccessToken } from '@/libs/http/cookies/accessToken';;

export async function logout(currentState: stateLogout): Promise<stateLogout> {
    deleteAccessToken()
    revalidatePath('/',"layout")
    return {
        message: "عملیات باموفقیت انجام شد",
        status: "success"
    };
}

export async function login(currentState: stateLogin, formData: FormData): Promise<stateLogin> {
    const validatedFields = validateLoginData(formData);
    
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        };
    }
    try {
        const data = await userLogin(serializeFormData(formData) as typeof LoginFormSchema._output)
        setAccessToken(data.data.access_token)
        setNotification("کاربر با موفقیت وارد شد")
    } catch (error) {
        const errorResult = error as errorResult
        if (errorResult.errors?.statusCode === 403) {
            return {
                message: 'رمز یا ایمیل اشتباه است',
                statusCode: 401
            };
        }
        return {
            message: 'خطا در سرور',
            statusCode: 500
        };
    }
    revalidatePath("/")
}