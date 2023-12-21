'use server';

import { revalidatePath } from 'next/cache';
import userLogin from './data';
import validateLoginData from './validation';
import { stateLogin } from './types';
import { setAccessToken } from '@/libs/http/cookies/cookies';
import serializeFormData from '@/libs/utils/serializeFormData/serializeFormData';

export async function login(currentState: stateLogin, formData: FormData): Promise<stateLogin> {
    const validatedFields = validateLoginData(formData);
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'اطلاعات اشتباه وارد شده است',
            status: "error"
        };
    }

    try {
        const data = await userLogin(serializeFormData(formData))
        setAccessToken(data.data.access_token)
    } catch (error) {
        return {
            message: 'خطا در سرور',
            status: "error"
        };
    }
    revalidatePath("/")

    return {
        message: "عملیات باموفقیت انجام شد",
        status: "success"
    };
}