import { z } from "zod";

const HasEmail = z.object({  email: z
    .string()
    .min(1, { message: "ایمیل را وارد کنید" })
    .email("ایمیل اشتباه است")});

    export default HasEmail