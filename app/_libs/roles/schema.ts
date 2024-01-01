import ZodString from "@/libs/Zod/effect/ZodString";
import HasIDSchema from "@/libs/Zod/schema/IDSchema";
import { z } from "zod";

const roleSchema = z.object({
    name: ZodString("اسم")
})
const EditRoleSchema = roleSchema.merge(HasIDSchema);
const AddRoleSchema = roleSchema;
export { EditRoleSchema, AddRoleSchema }