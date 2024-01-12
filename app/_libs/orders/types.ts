import idType from "@/libs/types/idType"
import responseSuccessType, { responseSuccessPagination } from "@/libs/types/responseType"
import { AddOrderSchema, EditOrderSchema } from "./schema"

type addOrderActionProps = {
  productId: number,
  userId: number
}
type editOrderActionProps = addOrderActionProps & idType
type orderType = {
  id: 3,
  orderNumber: string,
  orderTime: number,
  dueTime: number,
  deleted: null,
  assignee: 10,
  productId: 3,
  userId: 28
}
type getOrderByIdResult = responseSuccessType<orderType>
type getAllOrdersResult = responseSuccessType<orderType[]>
type getOrdersPageResult = responseSuccessPagination<orderType[]>
type AddOrderSchemaType = typeof AddOrderSchema
type EditOrderSchemaType = typeof EditOrderSchema

export type { AddOrderSchemaType, EditOrderSchemaType, editOrderActionProps, addOrderActionProps, getOrderByIdResult, getOrdersPageResult, orderType, getAllOrdersResult }