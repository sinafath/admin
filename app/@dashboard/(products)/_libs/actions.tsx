'use server';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers'
import { stateLogout } from './types';
import { deleteAccessToken } from '@/libs/http/cookies/accessToken';;

export async function logout(currentState: stateLogout): Promise<stateLogout> {
    deleteAccessToken()
    revalidatePath('/',"layout")
    return {
        message: "عملیات باموفقیت انجام شد",
        status: "success"
    };
}