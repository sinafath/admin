import { z } from "zod";
import ZodString from "../Zod/ZodString";

const HasPassword = z.object({
    password: ZodString("رمز")
})

export default HasPassword
