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
type errorResult = {
    errors: {
        message: string,
        error: string,
        statusCode: 401 | 403 | 200
    },
}
type stateLogin = {
    errors?: {
        email?: string[] | undefined;
        password?: string[] | undefined;
    };
    message?: string;
    statusCode?: 403 | 500 | 200 | 401
} | null | undefined
export type {stateLogin,responseLogin,errorResult}