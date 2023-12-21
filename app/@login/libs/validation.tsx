import serializeFormData from "@/libs/utils/serializeFormData/serializeFormData";
import { z } from "zod";

const FormSchema = z.object({
    email: z
        .string()
        .min(1, { message: "ایمیل را وارد کنید" })
        .email("ایمیل اشتباه است"),
    password: z.string().min(1, { message: "رمز را وارد کنید" }),
});

export default function validateLoginData(data: FormData) {
    return FormSchema.safeParse(serializeFormData(data))
};
