import { z } from "zod";

const EditRoleschema = z.object({
    name: z
        .string()
        .min(1, { message: "اسم را وارد کنید" })
});

type EditًRoleschemaType = z.infer<typeof EditRoleschema>;

export type {EditًRoleschemaType}
export {EditRoleschema}