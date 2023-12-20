type error = {
    errors: {
        message: string,
        error: string,
        statusCode: number
    },
    timestamp: number
}
type response = {
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

    error?: error;
    message: string;
    status: string
} | null
export type {stateLogin,response,error}