'use server';

import { revalidatePath } from 'next/cache';
import userLogin from './data';
import validateLoginData from './validation';
import { errorResult, stateLogin } from './types';
import { setAccessToken } from '@/libs/http/cookies/cookies';
import serializeFormData from '@/libs/utils/serializeFormData/serializeFormData';

export async function login(currentState: stateLogin, formData: FormData): Promise<stateLogin> {
    const validatedFields = validateLoginData(formData);
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'اطلاعات اشتباه وارد شده است',
            statusCode: 401
        };
    }
    try {
        const data = await userLogin(serializeFormData(formData))
        setAccessToken(data.data.access_token)
    } catch (error) {
        const errorResult = error as errorResult
        if (errorResult.errors.statusCode === 403) {
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
    return {
        message: "عملیات باموفقیت انجام شد",
        statusCode: 200
    };
}