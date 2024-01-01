import ZodNumber from "@/libs/Zod/effect/ZodNumber";
import ZodString from "@/libs/Zod/effect/ZodString";
import HasIDSchema from "@/libs/Zod/schema/IDSchema";
import { z } from "zod";

const userSchema = z.object({
        name: ZodString("اسم"),
        roleId: ZodNumber("نقش"),
        routeIds:  z.array(ZodNumber("مسیر"),{invalid_type_error:"مسیر اشتباه است",required_error:"مسیر الزامی است"}).nonempty("مسیر الزامی است"),
        read: ZodString("خواندن")
})
const EditPermissionSchema = userSchema.merge(HasIDSchema);;
const AddPermissionSchema = userSchema;
export { EditPermissionSchema, AddPermissionSchema }