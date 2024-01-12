import responseSuccessType, { responseSuccessPagination } from "@/libs/types/responseType"
import { AddProductSchema, EditProductSchema } from "./schema"

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
type EditProductSchemaType = typeof EditProductSchema
type AddProductSchemaType = typeof AddProductSchema

export type { addProductProps, AddProductSchemaType,GetProductByIdResult, GetProductsPageResult,editProductByIdProps,GetAllProductsResult,EditProductSchemaType ,productType}