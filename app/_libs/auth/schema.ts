import HasEmail from "@/libs/Zod/schema/EmailSchema";
import HasIDSchema from "@/libs/Zod/schema/IDSchema";
import HasPassword from "@/libs/Zod/schema/PasswordSChema";
import { z } from "zod";

const LoginSchema = HasEmail.merge(HasPassword)

type LoginSchemaType = z.infer<typeof LoginSchema>;

export type {LoginSchemaType}
export {LoginSchema}