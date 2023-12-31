
type message = {
    serverError?: string

    wrongValue?: string
}
type errorHandlerReturnedValue = {
    serverError: string,

}
function errorHandler(errorResult: any, messages?: message): errorHandlerReturnedValue {
    const { serverError = 'خطا در سرور', wrongValue = "اطلاعات وارد شده اشتباه است" } = messages || {}
    if (errorResult?.errors?.statusCode === 403) {
        return {
            serverError: wrongValue,
        };
    }
    return {
        serverError: serverError,
    };
}
export type { errorHandlerReturnedValue }
export default errorHandler