import { z } from "zod";

const LoginSchema = z.object({
    email: z
        .string()
        .min(1, { message: "ایمیل را وارد کنید" })
        .email("ایمیل اشتباه است"),
    password: z.string().min(1, { message: "رمز را وارد کنید" }),
});

type LoginSchemaType = z.infer<typeof LoginSchema>;

export type {LoginSchemaType}
export {LoginSchema}