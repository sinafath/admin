import { z } from "zod";

function ZodEmail() {
  return z
    .string({
      required_error: `ایمیل را وارد کنید`,
      invalid_type_error: "ایمیل  اشتباه است",

    }).email("ایمیل  اشتباه است")
}
export default ZodEmail