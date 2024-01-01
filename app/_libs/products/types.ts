import responseSuccessType, { responseSuccessPagination } from "@/libs/types/responseType"

type addProductProps = { userId: number, name: string, durationTime?: number }
type editProductByIdProps = addProductProps & {id:number}

type productType = {
    id: number,
  name: string,
    durationTime: number,
    userId: number,
    deleted: null
  
}

type GetProductByIdResult = responseSuccessType<productType>
type GetAllProductsResult =  responseSuccessType<productType[]>
type GetProductsResult =  responseSuccessPagination<productType[]>

export type { addProductProps, GetProductByIdResult, GetProductsResult,editProductByIdProps,GetAllProductsResult ,productType}