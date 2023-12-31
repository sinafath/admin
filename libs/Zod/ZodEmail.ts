import { z } from "zod";

function ZodEmail(name:string){
    return  z
    .number({
        required_error: `ایمیل را وارد کنید`,
        invalid_type_error: "ایمیل  اشتباه است",
      })
}
export default ZodNumber