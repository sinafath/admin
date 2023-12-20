'use server';

import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers'
import { stateLogout } from './types';
import { deleteAccessToken } from '@/libs/cookies/cookies';
import { redirect } from 'next/navigation';

export async function logout(currentState: stateLogout): Promise<stateLogout> {
    console.log(cookies().getAll())
    deleteAccessToken()

    revalidatePath('./')
    redirect("./")
    return {
        message: "عملیات باموفقیت انجام شد",
        status: "success"
    };
}