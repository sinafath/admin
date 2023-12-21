type responseLogin = {
    timestamp: string,
    status: string,
    data: {
        access_token: string,
        roles: {
            id: number,
            name: string
        }[]
    },
    statusCode: 201
}
type stateLogin = {
    errors?: {
        email?: string[] | undefined;
        password?: string[] | undefined;
    };
    message: string;
    status: "error" | "success"
} | null
export type {stateLogin,responseLogin}