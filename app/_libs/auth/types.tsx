import responseSuccess from "@/libs/types/response"

type loginResultType = responseSuccess<{
    access_token: string,
    roles: {
        id: number,
        name: string
    }[]
}>


export type { loginResultType }