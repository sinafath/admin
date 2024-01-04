import responseSuccessType, { responseSuccessPagination } from "@/libs/types/responseType"

type addProductProps = { userId: number, name: string, durationTime?: number }
type editProductByIdProps = addProductProps & {id:number}

type productType = {
    id: number,
  name: string,
    durationTime: number | null,
    userId: number,
    deleted: null
  
}

type GetProductByIdResult = responseSuccessType<productType>
type GetAllProductsResult =  responseSuccessType<productType[]>
type GetProductsPageResult =  responseSuccessPagination<productType[]>

export type { addProductProps, GetProductByIdResult, GetProductsPageResult,editProductByIdProps,GetAllProductsResult ,productType}