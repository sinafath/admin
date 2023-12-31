import ZodNumber from "@/libs/Zod/ZodNumber";
import ZodString from "@/libs/Zod/ZodString";
import HasIDSchema from "@/libs/schema/HasIDSchema";
import { z } from "zod";

const ProductSchema = z.object({
    name: ZodString("اسم"),
    durationTime: ZodNumber("مدت"),
    userId: ZodNumber("کاربر"),
})
const EditProductSchema = ProductSchema.merge(HasIDSchema)
const AddProductSchema = ProductSchema


export { EditProductSchema ,AddProductSchema}