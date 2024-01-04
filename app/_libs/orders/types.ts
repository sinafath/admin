import idType from "@/libs/types/idType"
import responseSuccessType, { responseSuccessPagination } from "@/libs/types/responseType"

type addOrderByIdProps = {
  productId: number,
  userId: number
}
type editOrderByIdProps = addOrderByIdProps & idType
type orderType = {
  id: 3,
  orderNumber:string,
  orderTime:number,
  dueTime:number,
  deleted: null,
  assignee: 10,
  productId: 3,
  userId: 28
}
type getOrderByIdResult = responseSuccessType<orderType>
type getAllOrdersResult = responseSuccessType<orderType[]>
type getOrdersPageResult = responseSuccessPagination<orderType[]>

export type { editOrderByIdProps, addOrderByIdProps,getOrderByIdResult, getOrdersPageResult, orderType, getAllOrdersResult }