import errorHandler, { errorHandlerReturnedValue } from "../utils/errorHandler/errorHandler";
import revalidateAll from "../http/revalidateAll/revalidateAll";
import { redirect } from "next/navigation";
import formDataToObject from "../converts/formDataToObject/formDataToObject";

type props = {
    revalidateAll?: boolean
    redirect?: (formData: any, variables: any) => any
}


function errorMiddleware<currentState extends errorHandlerReturnedValue>(func: (_currentState: currentState, formData: FormData) => any
    , props?: props) {
    return async (_currentState: currentState, formData: FormData): Promise<currentState> => {
        const { variables, ...data } = formDataToObject(formData)
        try {


            const data = await func(_currentState, formData);
            if (data?.errors) {
                return data
            }
        } catch (error) {
            console.log({ error })
            return errorHandler(error) as any
        }
        props?.revalidateAll === true && revalidateAll()


        if (props?.redirect) redirect(props?.redirect?.(data, variables))
        return data
    }

}

export default errorMiddleware