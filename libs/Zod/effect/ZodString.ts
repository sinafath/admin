import { z } from "zod";

function ZodString(name: string) {
  return z
    .string({
      required_error: `${name} را وارد کنید`,
      invalid_type_error: "رشته وارد کنید",
    }).trim().min(1, { message: `${name} را وارد کنید` })
}
export default ZodString