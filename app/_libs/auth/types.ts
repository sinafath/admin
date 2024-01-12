import responseSuccessType from "@/libs/types/responseType"

type loginResultType = responseSuccessType<{
    access_token: string,
    roles: {
        id: number,
        name: string
    }[]
}>

type loginPropsType = {
    email: string;
    password: string;
}
export type { loginResultType,loginPropsType }