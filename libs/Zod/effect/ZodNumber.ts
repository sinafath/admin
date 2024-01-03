import { z } from "zod";

function ZodNumber(name:string){
    return  z
    .number({
        required_error: `${name} را وارد کنید`,
        invalid_type_error: "عدد وارد کنید",
      }).min(1, { message: `${name} را وارد کنید`})
}
export default ZodNumber