import ZodString from "@/libs/Zod/ZodString";
import HasIDSchema from "@/libs/schema/HasIDSchema";
import { z } from "zod";

const roleSchema = z.object({
    name: ZodString("اسم")
})
const EditRoleSchema = roleSchema.merge(HasIDSchema);
const AddRoleSchema = roleSchema;
export { EditRoleSchema, AddRoleSchema }