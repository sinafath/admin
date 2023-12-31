import ZodString from "@/libs/Zod/ZodString";
import HasIDSchema from "@/libs/schema/HasIDSchema";
import { z } from "zod";

const userSchema = z.object({
        name: ZodString("اسم"),
        roleId: ZodString("نقش"),
        routeIds:  z.array(ZodString("مسیر")).nonempty(),
        read: ZodString("خواندن")
})
const EditPermissionSchema = userSchema.merge(HasIDSchema);;
const AddPermissionSchema = userSchema;
export { EditPermissionSchema, AddPermissionSchema }