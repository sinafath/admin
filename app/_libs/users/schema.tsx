import HasEmail from "@/libs/schema/HasEmail";
import HasIDSchema from "@/libs/schema/HasIDSchema";
import HasPassword from "@/libs/schema/HasPassword";
import PasswordStrictSchema from "@/libs/schema/PasswordStrictSchema";
import { z } from "zod";

const userSchema = z.object({
    username: z
        .string()
        .min(1, { message: "نام کاربری را وارد کنید" }),
}).merge(HasEmail).merge(PasswordStrictSchema)
const EditUserSchema = userSchema.merge(HasIDSchema);;
const AddUserSchema = userSchema;
export { EditUserSchema, AddUserSchema }