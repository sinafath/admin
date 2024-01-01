import { z } from "zod";
import ZodString from "../effect/ZodString";

const HasPassword = z.object({
    password: ZodString("رمز")
})

export default HasPassword
