import HasEmail from "@/libs/schema/HasEmail";
import HasIDSchema from "@/libs/schema/HasIDSchema";
import HasPassword from "@/libs/schema/HasPassword";
import { z } from "zod";

const LoginSchema = HasEmail.merge(HasPassword)

type LoginSchemaType = z.infer<typeof LoginSchema>;

export type {LoginSchemaType}
export {LoginSchema}