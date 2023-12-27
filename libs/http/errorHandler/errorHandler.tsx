import { errorResult } from "@/app/_libs/auth/types";

type message = {
    serverError?: string

    wrongValue?: string
}
type errorHandlerReturnedValue = {
    message: string,
    statusCode: 500 | 401
}
function errorHandler(errorResult: any, messages?: message): errorHandlerReturnedValue {
    const { serverError = 'خطا در سرور', wrongValue = "اطلاعات وارد شده اشتباه است" } = messages || {}
    if (errorResult?.errors?.statusCode === 403) {
        return {
            message: wrongValue,
            statusCode: 401
        };
    }
    return {
        message: serverError,
        statusCode: 500
    };
}
export default errorHandler