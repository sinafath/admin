import { z } from "zod"
import validateMiddleware from "./validateMiddleware"
import errorMiddleware from "./errorMiddleware"
import { errorHandlerReturnedValue } from "../utils/errorHandler/errorHandler"
import formDataToObject from "../converts/formDataToObject/formDataToObject"

type props = {
    schema: z.ZodObject<any, any, any, any, any>
    revalidateAll?: boolean
    redirect?:(formData: any ,variables:any) => any
}

function middlewares<currentState extends   errorHandlerReturnedValue, formData>(func: (formData: any ,variables:any) => any
    , { schema,revalidateAll,redirect }: props) {
    return errorMiddleware<currentState>(validateMiddleware(
         (_currentState,formData)=>
         { 
            const {variables ,...data} = formDataToObject(formData)
            return func(data,variables)
        }, schema),{revalidateAll,redirect}) 

}

export default middlewares