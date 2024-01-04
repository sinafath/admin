import ZodNumber from "@/libs/Zod/effect/ZodNumber";
import ZodString from "@/libs/Zod/effect/ZodString";
import HasIDSchema from "@/libs/Zod/schema/IDSchema";
import { z } from "zod";

const ProductSchema = z.object({
    name: ZodString("اسم"),
    durationTime: ZodNumber("مدت"),
    userId: ZodNumber("کاربر"),
})
const EditProductSchema = ProductSchema.merge(HasIDSchema)
const AddProductSchema = ProductSchema

export { EditProductSchema ,AddProductSchema}