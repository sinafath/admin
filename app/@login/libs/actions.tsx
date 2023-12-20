'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import Customfetch from '@/libs/fetch/fetch';
import { cookies } from 'next/headers'
import { error, response, stateLogin } from './types';


const FormSchema = z.object({
    email: z
        .string()
        .min(1, { message: "ایمیل را وارد کنید" })
        .email("ایمیل اشتباه است"),
    password: z.string().min(1, { message: "رمز را وارد کنید" }),
});



export async function login(path: string, currentState: stateLogin, formData: FormData): Promise<stateLogin> {
    const formDataExtracted = {
        email: formData.get('email'),
        password: formData.get('password'),
    }
    // Validate form fields using Zod
    const validatedFields = FormSchema.safeParse(formDataExtracted);

    // If form validation fails, return errors early. Otherwise, continue.
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'اطلاعات اشتباه وارد شده است',
            status: "validatationError"
        };
    }


    try {
        const data = await Customfetch<response>("/api/v1/user/login", {
            body: formDataExtracted,
        })
        console.log({ data })
        cookies().set('access_token', data.data.access_token, {
            httpOnly: true, secure: process.env.NODE_ENV !== 'development',
            sameSite: 'strict',
            path: '/',
        })
    } catch (error) {
        const customError = error as any as error
        return {
            message: 'خطا در سرور',
            status: "serverError"
        };
    }
    // Revalidate the cache for the invoices page and redirect the user.
    revalidatePath("./")

    return {
        message: "عملیات باموفقیت انجام شد",
        status: "success"
    };
}