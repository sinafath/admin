import { z } from "zod";

import { SafeParseReturnType } from "zod";
import formDataToObject from "../converts/formDataToObject/formDataToObject";


function validateErrors<type>(validatedFields: SafeParseReturnType<type, type>) {
    if (validatedFields.success) return
    return ({
        errors: Object.fromEntries(Object.entries(validatedFields.error.flatten().fieldErrors).map(([key,value])=>[key,(value as string[])[0]])),
    })
}
function validateMiddleware<currentState extends {}>(func: (_currentState: currentState, formData: FormData) => any
    , schema: z.ZodObject<any, any, any, any, any>) {
    return async (_currentState: currentState, formData: FormData) => {
        const {variables ,...data} = formDataToObject(formData)
        const validatedFields = schema.safeParse(data);
        if (!validatedFields.success) {
            return validateErrors(validatedFields)
        }
        return func(_currentState, formData)
    }

}
export default validateMiddleware