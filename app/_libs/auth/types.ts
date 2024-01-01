import responseSuccessType from "@/libs/types/responseType"

type loginResultType = responseSuccessType<{
    access_token: string,
    roles: {
        id: number,
        name: string
    }[]
}>


export type { loginResultType }