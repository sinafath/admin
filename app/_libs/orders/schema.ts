import HasIDSchema from "@/libs/Zod/schema/IDSchema";
import { z } from "zod";

const OrderSchema = z.object({
  productId: z.number({ required_error: "محصول الزامی است" }),
  userId: z.number({ required_error: "محصول الزامی است" }),
})
const EditOrderSchema = OrderSchema.merge(HasIDSchema);
const AddOrderSchema = OrderSchema;
export { EditOrderSchema, AddOrderSchema }