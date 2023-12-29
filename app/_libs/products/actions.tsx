"use server"

import middlewares from "@/libs/middleware/middleware"
import { EditProductSchema } from "./validation"

export const EditProductAction = middlewares(async function (_currentState: stateLogin, formData: FormData): Promise<stateLogin> {
    // const data = await use(formDataToObject(formData) as LoginSchemaType)
    // setAccessToken(data.data.access_token)

    // const role = await userRole(data.data.roles[0].id)
    // console.log({ role })
    // setAccessToken(role.data.access_token)
},
    { schema: EditProductSchema, revalidateAll: true }
)