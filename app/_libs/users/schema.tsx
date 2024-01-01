import HasEmail from "@/libs/Zod/schema/EmailSchema";
import HasIDSchema from "@/libs/Zod/schema/IDSchema";
import HasPassword from "@/libs/Zod/schema/PasswordSChema";
import PasswordStrictSchema from "@/libs/Zod/schema/PasswordStrictSchema";
import { z } from "zod";

const userSchema = z.object({
    username: z
        .string()
        .min(1, { message: "نام کاربری را وارد کنید" }),
}).merge(HasEmail).merge(PasswordStrictSchema)
const EditUserSchema = userSchema.merge(HasIDSchema);;
const AddUserSchema = userSchema;
export { EditUserSchema, AddUserSchema }